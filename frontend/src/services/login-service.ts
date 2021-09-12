import config from '../config';
import { LoginResponse, UserData } from '../interfaces';

const loginService = async (data: UserData): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${config.url}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.status === 'error') {
      return {
        message: 'Username or password is incorrect.',
        type: 'error',
      };
    } else {
      return {
        authorization: result.authorization,
        message: `Welcome ${data.username}!`,
        type: 'success',
      };
    }
  } catch (error: any) {
    return {
      message: error.message,
      type: 'error',
    };
  }
};

export { loginService };
