import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { LoginResponse, UserData } from '../../interfaces';
import { loginService } from '../../services/login-service';

import Message from '../common/alert-message';
import Button from '../common/button/Button';
import Input from '../common/input';
import Title from '../common/title';

interface LoginProps {
  saveToken: Function;
}

const Login: React.FC<LoginProps> = ({ saveToken }) => {
  let history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const usernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    let user: UserData = { username: '', password: '' };

    if (username.length === 0 || password.length === 0) {
      setMessage('Username and password are required.');
      setMessageType('error');
      return;
    } else if (password.length < 8) {
      setMessage('Username or password is incorrect.');
      setMessageType('error');
    } else {
      user.username = username;
      user.password = password;
    }

    let result: LoginResponse = await loginService(user);
    setMessage(result.message);
    setMessageType(result.type);

    if (result.type === 'success') {
      setTimeout(() => {
        saveToken({
          authorization: result.authorization,
        });
        history.push('/books');
      }, 1000);
    }
  };

  return (
    <div className="content">
      <div className="formBox">
        <Title text="Login to greenbook" />
        <form className="form" onSubmit={handleOnSubmit}>
          <Input
            value={username}
            type="text"
            placeholder="My username"
            onChange={usernameChange}
          />
          <Input
            value={password}
            type="password"
            placeholder="My password"
            onChange={passwordChange}
          />
          <div className="redirection">
            <p>Don't have an account yet?</p>
            <Link to="/signup"> Sign Up!</Link>
          </div>
          <Button label="Login" />
          <Message type={messageType} text={message} />
        </form>
      </div>
    </div>
  );
};

export default Login;
