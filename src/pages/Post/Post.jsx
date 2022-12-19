import { fetchArticlesById } from 'api/articlesAPI';
import { BackButton } from 'components/BackButton/BackButton';
import { Container } from 'components/Container/Container';
import { useFetch } from 'Hooks/useFetch';
import { useParams } from 'react-router-dom';
import FALLBACK_THUMB from '../../assets/314f024dc6.jpg';

const PostPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    () => fetchArticlesById(id),
    [id]
  );
  return (
    <Container>
      {isLoading && <>Loading...</>}
      {data && (
        <>
          <div>
            <BackButton>Back</BackButton>
          </div>
          <span>Article id:{data.id}</span>
          <h1>{data.title}</h1>
          <img src={FALLBACK_THUMB} alt=""></img>
        </>
      )}
    </Container>
  );
};

export default PostPage;
