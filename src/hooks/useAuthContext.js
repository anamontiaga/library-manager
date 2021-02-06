import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

export const useAuthContext = () => {
  const isAuthenticated = useContext(AuthContext);
  return isAuthenticated;

};