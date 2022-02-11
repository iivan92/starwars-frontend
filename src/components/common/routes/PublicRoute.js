import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isLogged);
  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoute;
