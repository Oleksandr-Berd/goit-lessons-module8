import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { useWatch } from 'Hooks/useWatch';
import { useState } from 'react';
import { useEffect } from 'react';
import { Post } from './Post/Post';
import * as SC from './Posts.styled.js';
import { usePaginationContext } from 'components/context/pagination';
import { Pagination } from 'components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, removePost } from 'Redux/likedPosts/slice';
import { fetchPosts } from 'Redux/posts/operations';
import { selectPostsState } from 'Redux/posts/slices';
import { LikedPostsByPage } from './LikedPostsByPage/LikedPostsByPage';
import { selectLikedPosts } from 'Redux/posts/slices';
import { selectLikedPostsIds } from 'Redux/likedPosts/slice';
import { getLikedPostsDetails } from 'api/articlesAPI';
export const Posts = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const { page, setTotalPages } = usePaginationContext();
  const {
    error,
    loading,
    nbPages,
    items: posts,
  } = useSelector(selectPostsState);
  const dispatch = useDispatch();
  const likedPostsIds = useSelector(selectLikedPostsIds);
  const likedPosts = useSelector(selectLikedPosts);
  const likedIdsSet = new Set([...likedPostsIds]);

  const handleQueryChange = evt => {
    const { target } = evt;
    setQuery(target.value);
  };

  const handleLikeClick = id => {
    const isLiked = likedIdsSet.has(id);
    if (isLiked) {
      dispatch(removePost(id));
    } else {
      const likedPost = posts.find(post => post.objectID === id);
      dispatch(addPost(likedPost.objectID));
    }
  };

  useWatch(() => {
    setSearchParams({ query });
  }, [query]);

  useEffect(() => {
    setTotalPages(nbPages);
  }, [nbPages, setTotalPages]);

  useEffect(() => {
    dispatch(fetchPosts({ query, page }));
  }, [dispatch, query, page]);

  useEffect(() => {
    getLikedPostsDetails(likedPostsIds).then(console.log);
  }, [likedPostsIds]);

  return (
    <div>
      <Container>
        <SC.Form>
          <input type="text" value={query} onChange={handleQueryChange} />
          <button>Add</button>
        </SC.Form>
        {loading && <Loader />}
        {error && <>There was an error</>}
        <LikedPostsByPage items={likedPosts} />
        <SC.Posts>
          {posts.map(({ title = '', points, objectID }) => (
            <Post
              id={objectID}
              key={objectID}
              title={title}
              likes={points}
              onLike={handleLikeClick}
              isLiked={likedIdsSet.has(objectID)}
            />
          ))}
        </SC.Posts>
        <Pagination page={1} />
      </Container>
    </div>
  );
};
