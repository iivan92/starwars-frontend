import '../../styles/App.css';
import './Home.styles.css';

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
        <Button>
          <img src={people} className="Planet" alt="logo" height="50px" />
        </Button>
        <Button>
          <img src={planet} className="Planet" alt="logo" height="50px" />
        </Button>
        <Button>
          <img src={starship} className="Planet" alt="logo" height="50px" />
        </Button>
      </section>
    </main>
  </div>
);

export default Home;
