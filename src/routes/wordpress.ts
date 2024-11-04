import { Router } from 'express';
import axios from 'axios';

const router = Router();

// Get WordPress posts
router.get('/posts', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.WP_API_URL}/wp/v2/posts`, {
      headers: {
        'Authorization': `Bearer ${process.env.WP_API_TOKEN}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Get WordPress users
router.get('/users', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.WP_API_URL}/wp/v2/users`, {
      headers: {
        'Authorization': `Bearer ${process.env.WP_API_TOKEN}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

export const wpRoutes = router;