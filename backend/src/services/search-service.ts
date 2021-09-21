import { resolve } from 'path/posix';
import { db } from '../data/connection';
import { Book, DbResult, ErrorHandling, SearchReq, SearchRes } from '../models';
import { createErrorPromise } from './error-service';

const getBook = async (
  request: SearchReq
): Promise<SearchRes | ErrorHandling> => {
  const { search } = request;

  if (!search) {
    return createErrorPromise('No input for a search in the database.');
  }
  const data: DbResult = await db
    .query(`SELECT * from book WHERE title LIKE ? OR author LIKE ?`, [
      search,
      search,
    ])
    .catch(error => {
      throw new Error(error.message);
    });

  const response: SearchRes = ((data as DbResult).results as SearchRes[])[0];

  if (!response) {
    return createErrorPromise('Book not found!');
  } else {
    return response;
  }
};

export const searchService = {
  getBook,
};
