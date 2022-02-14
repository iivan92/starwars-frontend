import { Link } from 'react-router-dom';

import '../styles/App.css';
import logo from '../resources/images/logo.svg';

const Starships = () => (
  <div className="App">
    <header className="App-header">
      <Link to="/">
        <p className="btn-back">{'<< Back'}</p>
      </Link>
      <p>Starships</p>
    </header>
    <main>
      <img src={logo} className="App-logo" alt="logo" />
    </main>
  </div>
);

export default Starships;
