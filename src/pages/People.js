import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/App.css';
import logo from '../resources/images/logo.svg';
import { getAllPeopleAsync } from '../store/contentSlice';
import CardPerson from '../components/Content/CardPerson';

const People = () => {
  const dispatch = useDispatch();
  const { status, people } = useSelector((state) => state.content);

  const initFetch = useCallback(() => {
    dispatch(getAllPeopleAsync());
  }, [dispatch]);

  useEffect(() => {
    if (people.length === 0) {
      initFetch();
    }
  }, [initFetch]);

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <p className="btn-back">{'<< Back'}</p>
        </Link>
        <p>People</p>
      </header>
      <main>
        {status === 'loading' ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <section>
            {people.map((element) => (
              <CardPerson key={`card-${element.name}`} {...element} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default People;
