import config from '../config';
import { AddReadingReq, ResponseMessage } from '../interfaces';

const addReadingService = async (
  authorization: string,
  data: AddReadingReq
): Promise<ResponseMessage> => {
  try {
    const response = await fetch(`${config.url}/api/reading`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `${authorization}`,
      },
      body: JSON.stringify(data),
    });

    ///////
    //////////
    ////////////
    return {
      message: 'ok',
    };
  } catch {
    return {
      type: 'error',
      message: 'internal server error',
    };
  }
};
