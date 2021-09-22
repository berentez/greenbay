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

    if ([401, 403].includes(response.status)) {
      return {
        status: 'error',
        message: response.status === 401 ? 'unauthorized' : 'forbidden',
      };
    } else {
      let result: BookInterface = await response.json();
      return result as BookInterface;
    }
  } catch {
    return { status: 'error', message: 'internal server error' };
  }
};

export { searchService };
