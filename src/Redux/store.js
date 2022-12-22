import { configureStore } from '@reduxjs/toolkit';
import likedPostsReducer from './likedPosts/slices';
import { persistStore, persistReducer } from 'redux-persist';

export const store = configureStore({
  reducer: {
    likedPosts: likedPostsReducer,
  },
});
