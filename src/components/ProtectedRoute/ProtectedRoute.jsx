import { useAuth } from 'Hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, loader: Loader }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  if (isRefreshing) {
    return Loader ?? <>Loading</>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};
