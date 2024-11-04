import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { wpRoutes } from './routes/wordpress.js';

// Load environment variables
config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// WordPress Routes
app.use('/api/wp', wpRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});