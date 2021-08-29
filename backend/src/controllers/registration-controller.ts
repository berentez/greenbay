import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/http-exception';
import { RegistrationReq } from '../models';
import { userService } from '../services';

export const registrationController = {
  async post(
    req: Request<unknown, unknown, RegistrationReq, unknown>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const data = await userService.register(req.body).catch(error => {
      next(new HttpException(500, error.message));
    });
  },
};
