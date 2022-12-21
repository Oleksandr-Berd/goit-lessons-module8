import PropTypes from 'prop-types';

export const Likes = ({ amount, isLiked = false, onLike }) => {
  return (
    <div>
      <button onClick={onLike}>{isLiked ? '🫀' : '🤬'} </button>
      {amount}
    </div>
  );
};

Likes.propTypes = {
  amount: PropTypes.number,
  isLiked: PropTypes.bool,
  onLike: PropTypes.func,
};
