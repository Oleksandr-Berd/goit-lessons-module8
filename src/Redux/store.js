import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './posts/slices';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import likedPosts from './likedPosts/slice';

const persistConfig = {
  key: 'posts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, likedPosts);

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    likedPosts: persistedReducer,
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
