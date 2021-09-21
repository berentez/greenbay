import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

import HttpException from '../exceptions/http-exception';

interface tokenInterface {
  id: string;
  username: string;
}

function authenticateToken(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers['authorization'];
  const token: string | undefined = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return next(new HttpException(401, 'Unauthorized'));
  }

  const secret = config.tokenSecrets.access as jwt.Secret;

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      console.log(err);
      return next(new HttpException(403, 'Invalid token'));
    }

    request.headers['id'] = (user as tokenInterface).id;

    next();
  });
}

export default authenticateToken;
