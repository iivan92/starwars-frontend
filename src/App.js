import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';

import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import Loader from './components/Loader';

const LoginPage = lazy(() => import('./pages/Login/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Home = lazy(() => import('./pages/Home/Home'));

const App = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
