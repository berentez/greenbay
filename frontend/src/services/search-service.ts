import config from '../config';
import { BookInterface, SearchError, SearchRequest } from '../interfaces';

const searchService = async (
  authorization: string,
  data: SearchRequest
): Promise<BookInterface | SearchError> => {
  try {
    const response = await fetch(`${config.url}/api/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `${authorization}`,
      },

      body: JSON.stringify(data),
    });

    let result: BookInterface = await response.json();

    if (result.status === 'error') {
      return {
        message: 'Something went wrong',
        status: 'error',
      };
    }

    return result;
  } catch (error: any) {
    return error.message;
  }
};

export { searchService };
