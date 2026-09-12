import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, logout, setUser } from '../store/authSlice';
import authService from '../services/authService';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  const login = async (email, password) => {
    try {
      const data = await authService.login(email, password);
      dispatch(loginSuccess(data));
      return data;
    } catch (err) {
      throw err;
    }
  };

  const handleLogout = () => {
    authService.logout();
    dispatch(logout());
  };

  const updateUser = (userData) => {
    dispatch(setUser(userData));
  };

  return {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    login,
    logout: handleLogout,
    updateUser,
  };
};
