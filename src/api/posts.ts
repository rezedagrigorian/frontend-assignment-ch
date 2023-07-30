import axios from 'axios';

import Post from '../types/post';

const POSTS_API_URL = 'http://localhost:3000/posts';

export const fetchPosts = async () => {
  const response = await axios.get(POSTS_API_URL);
  if (response.status !== 200) {
    throw new Error('Fetch failed');
  }

  return response.data;
};

export const addPost = async (post: Post) => {
  const response = await axios.post(POSTS_API_URL, post);
  if (response.status !== 201) {
    throw new Error('Fetch failed');
  }

  return post;
};

export const deletePost = async (id: string) => {
  const response = await axios.delete(`${POSTS_API_URL}/${id}`);
  if (response.status !== 200) {
    throw new Error('Fetch failed');
  }

  return id;
};
