import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/http-exception';
import { ErrorHandling, LoginReq } from '../models';
import { userService } from '../services';

export const loginController = {
  async post(
    req: Request<unknown, unknown, LoginReq>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { username, password } = req.body;
    const data = await userService
      .login({ username, password })
      .catch(error => {
        next(new HttpException(500, error));
      });
    if (
      (data as ErrorHandling).message === 'Username or password is incorrect.'
    ) {
      res.status(401).json(data);
    } else if ((data as ErrorHandling).status === 'error') {
      res.status(400).json(data);
    } else {
      res.status(200).json(data);
    }
  },
};
