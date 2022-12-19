import { Hero } from 'components/Hero/Hero';
import { Container } from 'components/Container/Container';
import { Pagination } from 'components/Pagination/Pagination';
import { Posts } from 'components/Posts/Posts';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Container>
        <Pagination />
      </Container>
      <Posts />
    </>
  );
};

export default HomePage;
