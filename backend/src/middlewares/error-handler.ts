import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/http-exception';

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  console.log(message);
  response.status(status).send({
    status,
    message,
  });
}

export default errorMiddleware;
