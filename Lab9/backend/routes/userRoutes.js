import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import {
  registerUser,
  listUsers,
  getUser,
  updateUser,
  deleteUser
} from '../controllers/userController.js';

const router = express.Router();

const uploadsDir = path.join(process.cwd(), 'backend', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (_req, file, cb) {
    const safeName = file.originalname.replace(/[^a-zA-Z0-9_.-]/g, '_');
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${unique}-${safeName}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

router.post('/register', upload.single('profilePic'), registerUser);
router.get('/', listUsers);
router.get('/:id', getUser);
router.put('/:id', upload.single('profilePic'), updateUser);
router.delete('/:id', deleteUser);

export default router;