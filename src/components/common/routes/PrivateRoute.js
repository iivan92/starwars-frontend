import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isLogged);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
