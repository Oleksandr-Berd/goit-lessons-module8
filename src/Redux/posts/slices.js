import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { fetchPosts } from './operations';
import { selectLikedPostsIds } from 'Redux/likedPosts/slice';

const initialState = {
  items: [],
  nbPages: 1,
  loading: false,
  error: null,
  status: 'idle',
};

const postsSlice = createSlice({
  name: 'likedPosts',
  initialState,

  extraReducers: {
    [fetchPosts.pendings](state, action) {
      state.loading = true;
      state.status = 'loading';
    },
    [fetchPosts.fulfilled](state, { payload }) {
      state.loading = false;
      state.items = payload.hits;
      state.error = null;
      state.status = 'fulfilled';
      state.nbPages = payload.nbPages;
    },
    [fetchPosts.rejected](state, action) {
      state.loading = false;
      state.error = action.error;
      state.nbPages = 1;
      state.status = 'rejected';
    },
  },
});

export default postsSlice.reducer;

export const selectPostsState = state => state.posts;

export const selectPosts = createDraftSafeSelector(
  selectPostsState,
  state => state.items
);

export const selectLikedPosts = createDraftSafeSelector(
  [selectPosts, selectLikedPostsIds],
  (posts, likedPostsIds) => {
    return posts.filter(post => likedPostsIds.includes(post.objectID));
  }
);
