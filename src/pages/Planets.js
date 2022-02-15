import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/App.css';
import logo from '../resources/images/logo.svg';
import { getAllPlanetsAsync } from '../store/contentSlice';
import CardPlanet from '../components/Content/CardPlanet';

const Planets = () => {
  const dispatch = useDispatch();
  const { status, planets } = useSelector((state) => state.content);

  const initFetch = useCallback(() => {
    dispatch(getAllPlanetsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (planets.length === 0) {
      initFetch();
    }
  }, [initFetch]);

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <p className="btn-back">{'<< Back'}</p>
        </Link>
        <p>Planets</p>
      </header>
      <main>
        {status === 'loading' ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <section className="list-cards">
            {planets.map((element) => (
              <CardPlanet key={`card-${element.name}`} {...element} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default Planets;
