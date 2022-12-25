import { useAuth } from 'Hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ children, loading: Loading }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  if (isRefreshing) {
    return Loading ?? <>Loading</>;
  }

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};
