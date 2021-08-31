import bcrypt from 'bcrypt';
import { db } from '../data/connection';
import {
  DbResult,
  ErrorHandling,
  RegistrationReq,
  RegistrationRes,
} from '../models';
import { createErrorPromise } from './error-service';
import { checkPassword } from './password-service';

const register = async (
  request: RegistrationReq
): Promise<RegistrationRes | ErrorHandling> => {
  const { username, password } = request;

  if (!username && !password) {
    return createErrorPromise('Username and password are required.');
  } else if (!username && password) {
    return createErrorPromise('Username is required.');
  } else if (username && !password) {
    return createErrorPromise('Password is required.');
  } else if (checkPassword(password)) {
    return createErrorPromise('Password must be at least 8 characters.');
  } else {
    //checking username
    const data: DbResult = await db
      .query(`SELECT * FROM user WHERE user.username = ?; `, [username])
      .catch(error => {
        throw Error(`database error: ${error.message}`);
      });

    if (data.results.length > 0) {
      return createErrorPromise('Username is already taken.');
    }

    //bcrypt psw
    const saltRounds = await bcrypt.genSalt();
    const hashPromise = () =>
      new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      });

    const hash = await hashPromise().catch(() => {
      throw new Error('something went wrong with hashing');
    });
  }
  // return { id: 1, username: username };
};

export const userService = {
  register,
};
