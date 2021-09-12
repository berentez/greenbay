import { FormMessage, UserData } from '../interfaces';
import config from '../config';

const signUpService = async (data: UserData): Promise<FormMessage> => {
  try {
    const response = await fetch(`${config.url}/api/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.status === 'error') {
      return {
        message: result.message,
        type: 'error',
      };
    } else {
      return {
        message: 'Successful registration!',
        type: 'success',
      };
    }
  } catch (error: any) {
    return {
      message: error.message,
      type: error,
    };
  }
};

export { signUpService };
