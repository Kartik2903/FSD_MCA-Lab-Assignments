import mysql from 'mysql2/promise';

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env;

export const pool = mysql.createPool({
  host: DB_HOST || 'localhost',
  port: Number(DB_PORT || 3306),
  user: DB_USER || 'root',
  password: DB_PASSWORD || '',
  database: DB_NAME || 'securespace',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// optional connectivity check at startup
export async function pingDb() {
  const conn = await pool.getConnection();
  try {
    await conn.ping();
    console.log('✅ MySQL connected.');
  } finally {
    conn.release();
  }
}