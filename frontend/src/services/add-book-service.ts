import { BookInterface, NewBook, NewBookResponse } from '../interfaces';
import config from '../config';

const addBookService = async (
  authorization: string,
  data: NewBook
): Promise<NewBookResponse> => {
  try {
    const response = await fetch(`${config.url}/api/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `${authorization}`,
      },
      body: JSON.stringify(data),
    });

    if ([401, 403].includes(response.status)) {
      return {
        type: 'error',
        message: response.status === 401 ? 'unauthorized' : 'forbidden',
      };
    } else if (response.status === 409) {
      return {
        type: 'error',
        message: 'Book is already in the database.',
      };
    } else {
      let result: BookInterface = await response.json();
      return result as BookInterface;
    }
  } catch {
    return { type: 'error', message: 'internal server error' };
  }
};

export { addBookService };
