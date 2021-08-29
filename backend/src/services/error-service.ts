import { ErrorHandling } from '../models/dto/errorhandling';

export const createErrorPromise = (message: string): Promise<ErrorHandling> => {
  return new Promise(resolve => resolve({ status: 'error', message }));
};
