import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { ACTION } from './actions';

const initialState = {
  likedPosts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.addLikedPost:
      return { ...state, likedPosts: [action.payload, ...state.likedPosts] };
    case ACTION.removeLikedPost:
      return {
        ...state,
        likedPosts: state.likedPosts.filter(post => post.id !== action.payload),
      };
    default:
      return state;
  }
};

const enhanncer = devToolsEnhancer();

export const store = createStore(rootReducer, enhanncer);
