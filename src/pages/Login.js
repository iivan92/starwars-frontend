import { useDispatch, useSelector } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { loginUserAsync, registerUserAsync } from '../store/userSlice';

const Login = () => {
  const dispatch = useDispatch();

  const { status, response, error } = useSelector((state) => state.user);

  const sendRegister = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    dispatch(registerUserAsync({ email, password }));
  };

  const sendLogin = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    dispatch(loginUserAsync({ email, password }));
  };

  return (
    <div className="App">
      <header className="App-header">
        {status === 'loading' && (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        {error?.message && <p className="msg-error">{error?.message}</p>}
        {response && <p className="msg-logged">Response: {response}</p>}
        <form onSubmit={sendRegister}>
          <label>
            Email:
            <input type="text" id="username" />
          </label>
          <label>
            Password:
            <input type="password" id="password" />
          </label>
          <button type="submit" disabled={status === 'loading'}>
            Submit
          </button>
        </form>
        <form onSubmit={sendLogin}>
          <label>
            Email:
            <input type="text" id="username" />
          </label>
          <label>
            Password:
            <input type="password" id="password" />
          </label>
          <button type="submit" disabled={status === 'loading'}>
            Submit
          </button>
        </form>
      </header>
    </div>
  );
};

export default Login;
