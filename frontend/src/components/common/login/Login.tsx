import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LoginResponse, UserData } from '../../../interfaces';
import { loginService } from '../../../services/login-service';
import Message from '../alert-message';
import Button from '../button/Button';
import Input from '../input';
import Title from '../title';

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

    if (username.length === 0 || password.length === 8) {
      setMessage('Username and password are required.');
      setMessageType('error');
      return;
    } else {
      user.username = username;
      user.password = password;
    }

    let result: LoginResponse = await loginService(user);
    setMessage(result.message);
    setMessageType(result.type);

    if (result.type === 'success') {
      saveToken({
        authorization: result.authorization,
      });

      setTimeout(() => {
        history.push('/books');
      }, 2000);
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
