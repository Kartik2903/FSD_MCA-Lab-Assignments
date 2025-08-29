import path from 'path';
import fs from 'fs';
import { pool } from '../config/db.js';
import { sendRegistrationEmail } from '../config/mailer.js';

function buildPublicFileUrl(filename) {
  if (!filename) return null;
  const base = process.env.PUBLIC_BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
  // We only expose /uploads/<basename>
  return `${base}/uploads/${encodeURIComponent(path.basename(filename))}`;
}

function dbRowToUser(row) {
  return {
    user_id: row.user_id,
    name: row.name,
    email: row.email,
    profile_pic: row.profile_pic,
    profile_pic_url: row.profile_pic ? buildPublicFileUrl(row.profile_pic) : null,
    reputation_score: row.reputation_score
  };
}

export async function registerUser(req, res) {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'name and email are required' });
    }

    // Store relative path in DB like backend/uploads/<file>
    const profilePath = req.file ? path.join('backend', 'uploads', req.file.filename) : null;

    const [result] = await pool.query(
      'INSERT INTO `user` (`name`, `email`, `password_hash`, `reputation_score`, `profile_pic`) VALUES (?, ?, ?, ?, ?)',
      [name, email, null, 0, profilePath]
    );

    const userId = result.insertId;
    const [rows] = await pool.query(
      'SELECT `user_id`, `name`, `email`, `reputation_score`, `profile_pic` FROM `user` WHERE `user_id` = ?',
      [userId]
    );
    const user = dbRowToUser(rows[0]);

    try {
      await sendRegistrationEmail({
        name: user.name,
        email: user.email,
        profilePicUrl: user.profile_pic_url
      });
    } catch (mailErr) {
      console.error('Email send error:', mailErr?.message || mailErr);
    }

    return res.status(201).json({ message: 'Registration successful', user });
  } catch (err) {
    console.error(err);
    if (err && err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Email already registered' });
    }
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export async function listUsers(_req, res) {
  try {
    const [rows] = await pool.query(
      'SELECT `user_id`, `name`, `email`, `reputation_score`, `profile_pic` FROM `user` ORDER BY `user_id` DESC'
    );
    res.json({ users: rows.map(dbRowToUser) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getUser(req, res) {
  try {
    const userId = Number(req.params.id);
    const [rows] = await pool.query(
      'SELECT `user_id`, `name`, `email`, `reputation_score`, `profile_pic` FROM `user` WHERE `user_id` = ?',
      [userId]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ user: dbRowToUser(rows[0]) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function updateUser(req, res) {
  try {
    const userId = Number(req.params.id);
    const { name, email, reputation_score } = req.body;

    // Get existing to possibly remove old file
    const [oldRows] = await pool.query('SELECT `profile_pic` FROM `user` WHERE `user_id`=?', [userId]);
    if (oldRows.length === 0) return res.status(404).json({ error: 'User not found' });

    const updates = [];
    const params = [];

    if (name !== undefined) { updates.push('`name`=?'); params.push(name); }
    if (email !== undefined) { updates.push('`email`=?'); params.push(email); }
    if (reputation_score !== undefined) { updates.push('`reputation_score`=?'); params.push(Number(reputation_score) || 0); }

    let newProfilePath = null;
    if (req.file) {
      newProfilePath = path.join('backend', 'uploads', req.file.filename);
      updates.push('`profile_pic`=?');
      params.push(newProfilePath);
    }

    if (updates.length === 0) {
      return res.status(400).json({ error: 'No fields to update' });
    }

    params.push(userId);
    await pool.query(`UPDATE \`user\` SET ${updates.join(', ')} WHERE \`user_id\` = ?`, params);

    if (newProfilePath && oldRows[0].profile_pic) {
      try {
        const oldPathAbs = path.join(process.cwd(), oldRows[0].profile_pic);
        if (fs.existsSync(oldPathAbs)) fs.unlinkSync(oldPathAbs);
      } catch (e) {
        console.warn('Failed to remove old profile pic:', e.message);
      }
    }

    const [rows] = await pool.query(
      'SELECT `user_id`, `name`, `email`, `reputation_score`, `profile_pic` FROM `user` WHERE `user_id` = ?',
      [userId]
    );
    res.json({ message: 'User updated', user: dbRowToUser(rows[0]) });
  } catch (err) {
    console.error(err);
    if (err && err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Email already registered' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function deleteUser(req, res) {
  try {
    const userId = Number(req.params.id);
    const [rows] = await pool.query('SELECT `profile_pic` FROM `user` WHERE `user_id`=?', [userId]);
    if (rows.length === 0) return res.status(404).json({ error: 'User not found' });

    await pool.query('DELETE FROM `user` WHERE `user_id`=?', [userId]);

    const profile_pic = rows[0].profile_pic;
    if (profile_pic) {
      const abs = path.join(process.cwd(), profile_pic);
      if (fs.existsSync(abs)) {
        try { fs.unlinkSync(abs); } catch (_) { /* ignore */ }
      }
    }
    res.json({ message: 'User deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}