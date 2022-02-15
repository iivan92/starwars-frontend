import logo from '../resources/images/logo.svg';
import '../styles/App.css';

const NotFound = () => (
  <div className="App">
    <header className="App-header">
      <p>404 Page not Found</p>
    </header>
    <main>
      <img src={logo} className="App-logo" alt="logo" />
    </main>
  </div>
);

export default NotFound;
