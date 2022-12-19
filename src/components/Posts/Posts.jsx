import { fetchArticles } from 'api/articlesAPI';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { useWatch } from 'Hooks/useWatch';
import { useFetch } from 'Hooks/useFetch';
import { useState } from 'react';
import { useEffect } from 'react';
import { Post } from './Post/Post';
import * as SC from './Posts.styled.js';
import { usePaginationContext } from 'components/context/pagination';
import { Pagination } from 'components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';

export const Posts = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [loading, setLoading] = useState(false);
  const [hasPostsError, setHasPostsError] = useState(false);
  const { page, setPage, setTotalPages } = usePaginationContext();

  const {
    data: articles,
    isLoading,
    error,
  } = useFetch(
    () =>
      fetchArticles(query, page).then(res => {
        return res.data;
      }),
    [query, page]
  );

  const handleQueryChange = evt => {
    const { target } = evt;
    setQuery(target.value);
  };

  useWatch(() => {
    setSearchParams({ query });
  }, [query]);

  useEffect(() => {
    if (!articles) return;

    setTotalPages(articles.nbPages);
  }, [articles, setTotalPages]);

  return (
    <div>
      <Container>
        <SC.Form>
          <input type="text" value={query} onChange={handleQueryChange} />
          <button>Add</button>
        </SC.Form>
        {isLoading && <Loader />}
        {error && <>There was an error</>}
        <SC.Posts>
          {articles?.hits?.map(({ title = '', points, objectID }) => (
            <Post id={objectID} key={objectID} title={title} likes={points} />
          ))}
        </SC.Posts>
        <Pagination page={1} />
      </Container>
    </div>
  );
};
