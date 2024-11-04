import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';

vi.mock('axios');

describe('WordPress API', () => {
  it('should fetch posts', async () => {
    const mockPosts = [
      { id: 1, title: { rendered: 'Test Post' } }
    ];

    (axios.get as any).mockResolvedValueOnce({ data: mockPosts });

    const response = await axios.get('/api/wp/posts');
    expect(response.data).toEqual(mockPosts);
  });

  it('should handle errors', async () => {
    (axios.get as any).mockRejectedValueOnce(new Error('API Error'));

    try {
      await axios.get('/api/wp/posts');
    } catch (error) {
      expect(error.message).toBe('API Error');
    }
  });
});