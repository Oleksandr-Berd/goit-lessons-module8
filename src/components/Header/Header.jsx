import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';
import { HeaderNav } from './HeaderNav/HeaderNav';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectLikedPostsIds } from 'Redux/likedPosts/slice';
import { Link } from 'react-router-dom';
import { useAuth } from 'Hooks/useAuth';

export const Header = () => {
  const isDesktop = window.innerWidth > 1200;

  const likedPosts = useSelector(selectLikedPostsIds);
  const { logout, isLoggedIn } = useAuth();

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
            {!isLoggedIn && (
              <Link className={styles.authLink} to="/login">
                Login
              </Link>
            )}
            {isLoggedIn && (
              <button onClick={logout} className={styles.authLink}>
                Logout
              </button>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};
