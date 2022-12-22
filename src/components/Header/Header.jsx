import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';
import { HeaderNav } from './HeaderNav/HeaderNav';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { getLikedPosts } from 'Redux/likedPosts/slices';

export const Header = () => {
  const isDesktop = window.innerWidth > 1200;

  const likedPosts = useSelector(getLikedPosts);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <Logo />
          <div className={styles.actions}>
            <button className={styles.likedPostsButton}>
              e🫀<span className={styles.totalLikes}>{likedPosts?.length}</span>
            </button>
            <HeaderNav isDesktop={isDesktop} />
          </div>
        </div>
      </Container>
    </header>
  );
};
