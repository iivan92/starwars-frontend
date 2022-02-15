/* eslint-disable jsx-a11y/control-has-associated-label */
import './Card.styles.css';

import people from '../../resources/images/people.png';

const CardPerson = ({ name, height, mass }) => (
  <article className="Card">
    <img src={people} alt="card-people" height="50px" />
    <p>Name: {name}</p>
    <p>Height: {height}</p>
    <p>Mass: {mass}</p>
  </article>
);

export default CardPerson;
