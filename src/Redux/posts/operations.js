import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from 'api/articlesAPI';

export const fetchPosts = createAsyncThunk(
  'posts/fetchByPage',
  async ({ query, page = 1 }) => {
    // const dispatch = thunkAPI;
    // dispatch({ type: 'NEWUSER' });
    const response = await fetchArticles(query, page);
    return response.data;
  }
);

export const fetchLikedPosts = createAsyncThunk('posts/liked', async ids => {});
