/* eslint-disable jsx-a11y/control-has-associated-label */
import './Button.styles.css';

const Button = ({ children }) => (
  <button className="Button" type="button">
    {children}
  </button>
);

export default Button;
