import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';

import PublicRoute from './components/common/routes/PublicRoute';
import PrivateRoute from './components/common/routes/PrivateRoute';
import Loader from './components/common/Loader';

const LoginPage = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Home = lazy(() => import('./pages/Home'));

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
