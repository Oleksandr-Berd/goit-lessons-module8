import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './posts/slices';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import likedPostsReducer from './likedPosts/slice';
import userReducer from './auth/slice';

const likedPostConfig = {
  key: 'posts',
  storage,
};

const userConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const persistedLikedPostsReducer = persistReducer(
  likedPostConfig,
  likedPostsReducer
);
const persistedUserReducer = persistReducer(userConfig, userReducer);

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    likedPosts: persistedLikedPostsReducer,
    user: persistedUserReducer,
  },
  middleware(getDefaultMiddleware) {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    });
    return defaultMiddleware;
  },
});

export const persistor = persistStore(store);
