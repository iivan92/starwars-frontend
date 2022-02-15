/* eslint-disable jsx-a11y/control-has-associated-label */
import './Card.styles.css';

import planet from '../../resources/images/planet.png';

const CardPlanet = ({ name, climate, terrain }) => (
  <article>
    <img src={planet} alt="card-people" height="50px" />
    <p>Name: {name}</p>
    <p>Climate: {climate}</p>
    <p>Terrain: {terrain}</p>
  </article>
);

export default CardPlanet;
