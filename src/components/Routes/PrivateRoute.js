import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged } from '../../utils/localStorage';
import { setLogin } from '../../store/userSlice';

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isLogged);

  if (!isAuthenticated) {
    const logged = isLogged();
    if (!logged) {
      return <Navigate to="/login" />;
    }

    dispatch(setLogin());
  }

  return children;
};

export default PrivateRoute;
