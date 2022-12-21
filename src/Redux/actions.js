export const ACTION = {
  addLikedPost: 'likedPosts/add',
  removeLikedPost: 'likedPosts/remove',
};

export const addLikedPost = post => {
  return {
    type: ACTION.addLikedPost,
    payload: post,
  };
};

export const removeLikedPost = id => {
  return {
    type: ACTION.removeLikedPost,
    payload: id,
  };
};
