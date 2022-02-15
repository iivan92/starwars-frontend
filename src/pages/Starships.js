import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/App.css';
import logo from '../resources/images/logo.svg';
import { getAllStarshipsAsync } from '../store/contentSlice';
import CardStarship from '../components/Content/CardStarship';

const Starships = () => {
  const dispatch = useDispatch();
  const { status, starships } = useSelector((state) => state.content);

  const initFetch = useCallback(() => {
    dispatch(getAllStarshipsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (starships.length === 0) {
      initFetch();
    }
  }, [initFetch]);

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <p className="btn-back">{'<< Back'}</p>
        </Link>
        <p>Starships</p>
      </header>
      <main>
        {status === 'loading' ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <section>
            {starships.map((element) => (
              <CardStarship key={`card-${element.name}`} {...element} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default Starships;
