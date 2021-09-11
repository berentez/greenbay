import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormMessage, UserData } from '../../interfaces';
import { signUpService } from '../../services/sign-up-service';
import Button from '../common/button/Button';

import Input from '../common/input';
import Title from '../common/title';

import './signup.scss';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  let history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const usernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    let newUser: UserData = { username: '', password: '' };

    if (username.length === 0 || password.length === 8) {
      setMessage('Username and password are required.');
      return;
    } else if (password.length <= 8) {
      setMessage('Your password should be at least 8 characters.');
      return;
    } else {
      newUser.username = username;
      newUser.password = password;
    }
    let result: FormMessage = await signUpService(newUser);
    setMessage(result.message);
  };

  return (
    <div className="content">
      <div className="formBox">
        <Title text="Sign Up" />
        <form className="form" onSubmit={handleOnSubmit}>
          <Input
            value={username}
            type="text"
            placeholder="My username"
            onChange={usernameChange}
          />
          <Input
            value={password}
            type="text"
            placeholder="My password"
            onChange={passwordChange}
          />
          <div className="redirection">
            <p>Already has an account?</p>
            <Link to="/login"> Go to login</Link>
          </div>

          <Button label="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
