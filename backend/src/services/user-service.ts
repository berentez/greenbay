import bcrypt from 'bcryptjs';
import { db, pool } from '../data/connection';
import {
  DbResult,
  ErrorHandling,
  LoginReq,
  LoginRes,
  RegistrationReq,
  RegistrationRes,
  UserInfo,
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
    //posting data to db
    const poolPromise = (): Promise<RegistrationRes> =>
      new Promise(resolve => {
        pool.getConnection((error, connection) => {
          if (error) {
            throw new Error(`Database connection error: ${error.message}`);
          }

          connection.beginTransaction(error => {
            if (error) {
              throw new Error(`Database connection error: ${error.message}`);
            }

            connection.query(
              `INSERT INTO user (username, password) VALUES (?, ?)`,
              [username, hash],
              error => {
                if (error) {
                  return connection.rollback(() => {
                    throw new Error(`database error: ${error.message}`);
                  });
                }
              }
            );

            //response
            connection.query(
              `SELECT id, username FROM user WHERE username = ?`,
              [username],
              (error, result) => {
                if (error) {
                  return connection.rollback(() => {
                    throw new Error(`database error: ${error.message}`);
                  });
                }
                const response: RegistrationRes = result[0] as RegistrationRes;

                connection.commit(error => {
                  if (error) {
                    return connection.rollback(() => {
                      throw new Error(`database error: ${error.message}`);
                    });
                  }
                  resolve(response);
                });
              }
            );
          });
          connection.release();
        });
      });
    return await poolPromise().catch(error => {
      throw new Error(`database error: ${error.message}`);
    });
  }
};

const login = async (request: LoginReq): Promise<LoginRes | ErrorHandling> => {
  const { username, password } = request;

  if (!username && !password) {
    return createErrorPromise('Username and password are required.');
  } else if (password && !username) {
    return createErrorPromise('Username is required.');
  } else if (username && !password) {
    return createErrorPromise('Password is required.');
  }

  const data: DbResult = await db
    .query(`SELECT * from user WHERE username = ?`, [username])
    .catch(error => {
      throw new Error(error.message);
    });

  const result = ((data as DbResult).results as UserInfo[])[0];
  console.log(result);
  return { authorization: 'logged in' };
};

export const userService = {
  register,
  login,
};
