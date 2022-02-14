import { Link } from 'react-router-dom';

import '../styles/App.css';
import logo from '../resources/images/logo.svg';

const NotFound = () => (
  <div className="App">
    <header className="App-header">
      <p>Starships</p>
    </header>
    <main>
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
    </main>
  </div>
);

export default NotFound;
