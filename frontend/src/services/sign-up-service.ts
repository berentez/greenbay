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

    console.log('success');

    return {
      message: 'Successful registration!',
    };
  } catch (error: any) {
    console.log('nope');
    return {
      message: error.message,
    };
  }
};

export { signUpService };
