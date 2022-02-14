import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setLogin } from '../../../store/userSlice';
import { isLogged } from '../../../utils/localStorage';

const PublicRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isLogged);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (isLogged()) {
    dispatch(setLogin());
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
