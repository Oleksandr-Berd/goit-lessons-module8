import { useDispatch, useSelector, useCallback } from 'react-redux';
import { logoutUser } from 'Redux/auth/operations';
import { selectUserState } from 'Redux/auth/slice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isRefreshing, user } = useSelector(selectUserState);
  const logout = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);
  return { isLoggedIn, isRefreshing, user, logout };
};
