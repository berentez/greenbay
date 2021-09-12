import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/http-exception';
import { Book, ErrorHandling } from '../models';
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

  async post(
    req: Request<Book>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { author, title, page, color } = req.body;
    const data = await bookService
      .addBookToDb({ author, title, page, color })
      .catch(error => {
        next(new HttpException(500, error));
      });

    if (
      (data as ErrorHandling).message === `Book is already in the database.`
    ) {
      res.status(409).json(data);
    } else if ((data as ErrorHandling).status === 'error') {
      res.status(401).json(data);
    } else {
      res.status(200).json(data);
    }
  },
};
