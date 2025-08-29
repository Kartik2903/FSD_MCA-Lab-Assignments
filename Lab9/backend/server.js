import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/userRoutes.js';
import { pingDb } from './config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Static serving for uploaded files
const uploadsPath = path.join(__dirname, 'backend', 'uploads');
app.use('/uploads', express.static(uploadsPath));

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Users API
app.use('/api/users', userRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, async () => {
  console.log(`🚀 SecureSpace API listening on http://localhost:${PORT}`);
  try {
    await pingDb();
  } catch (e) {
    console.error('❌ MySQL connection failed. Check your .env and DB server.', e?.message);
  }
}); 