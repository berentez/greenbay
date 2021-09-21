import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/http-exception';
import { ErrorHandling, SearchReq } from '../models';
import { searchService } from '../services/search-service';

export const searchController = {
  async post(
    req: Request<unknown, unknown, SearchReq, unknown>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const data = await searchService.searchBook(req.body).catch(error => {
      next(new HttpException(500, error));
    });

    if ((data as ErrorHandling).message === 'Book not found!') {
      res.status(404).json(data);
    } else if ((data as ErrorHandling).status === 'error') {
      res.status(400).json(data);
    } else {
      res.status(200).json(data);
    }
  },
};
