import { useDispatch, useSelector } from 'react-redux';
import '../../styles/App.css';
import './Login.styles.css';

import { loginUserAsync } from '../../store/userSlice';

const Login = () => {
  const dispatch = useDispatch();

  const { status, response, error } = useSelector((state) => state.user);

  const sendLogin = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    dispatch(loginUserAsync({ email, password }));
  };

  return (
    <div className="Login">
      <header className="App-header">Login</header>
      <main>
        <section>
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
          {error?.message && <p className="msg-error">{error?.message}</p>}
          {response && <p className="msg-logged">Response: {response}</p>}
        </section>
      </main>
    </div>
  );
};

export default Login;
