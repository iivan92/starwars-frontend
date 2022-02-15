/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/control-has-associated-label */
import './Card.styles.css';

import starship from '../../resources/images/starship.png';

const CardStarship = ({ name, starship_class, manufacturer }) => (
  <article>
    <img src={starship} alt="card-people" height="50px" />
    <p>Name: {name}</p>
    <p>Starship class: {starship_class}</p>
    <p>Manufacturer: {manufacturer}</p>
  </article>
);

export default CardStarship;
