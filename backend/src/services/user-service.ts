import { ErrorHandling, RegistrationReq, RegistrationRes } from '../models';
import { createErrorPromise } from './error-service';

const register = async (
  request: RegistrationReq
): Promise<RegistrationRes | ErrorHandling> => {
  const { username, password } = request;

  if (!username && !password) {
    return createErrorPromise('Username and password are required.');
  }
  return { id: 1, username: username };
};

export const userService = {
  register,
};
