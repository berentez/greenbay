import config from '../config';
import { SearchError, SearchRequest, SearchResponse } from '../interfaces';

const searchService = async (
  authorization: string,
  data: SearchRequest
): Promise<SearchResponse | SearchError> => {
  console.log(JSON.stringify(data));

  try {
    const response = await fetch(`${config.url}/api/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `${authorization}`,
      },

      body: JSON.stringify(data),
    });

    let result: SearchResponse = await response.json();

    return result;
  } catch (error: any) {
    return error.message;
  }
};

export { searchService };
