import '../../styles/App.css';
import './Home.styles.css';

import { Link } from 'react-router-dom';

import people from '../../resources/images/people.png';
import planet from '../../resources/images/planet.png';
import starship from '../../resources/images/starship.png';
import Button from '../../components/Button/Button';

const Home = () => (
  <div className="Home">
    <header className="App-header">
      <p>Home Page</p>
    </header>
    <main>
      <section>
        <Link to="/people">
          <Button>
            <img src={people} className="People" alt="logo" height="50px" />
          </Button>
        </Link>
        <Link to="/planets">
          <Button>
            <img src={planet} className="Planet" alt="logo" height="50px" />
          </Button>
        </Link>
        <Link to="/starships">
          <Button>
            <img src={starship} className="Starship" alt="logo" height="50px" />
          </Button>
        </Link>
      </section>
    </main>
  </div>
);

export default Home;
