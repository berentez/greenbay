import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/http-exception';
import { bookService } from '../services';

export const bookController = {
  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    const data = await bookService.getRandomBooks().catch(error => {
      next(new HttpException(500, error));
    });
    if (data) {
      res.status(200).json(data);
    }
  },
};
