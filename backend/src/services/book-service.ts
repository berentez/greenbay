import { db } from '../data/connection';
import { Book, DbResult, ErrorHandling, GetDataBaseBook } from '../models';
import { createErrorPromise } from './error-service';

const getRandomBooks = async (): Promise<GetDataBaseBook | ErrorHandling> => {
  const data: DbResult = await db
    .query(`SELECT * FROM book ORDER BY RAND() LIMIT 10`)
    .catch(error => {
      throw new Error(`database error: ${error.message}`);
    });

  const randomBooks: GetDataBaseBook = {
    books: data.results as Array<Book>,
  };
  return randomBooks;
};

export const bookService = {
  getRandomBooks,
};
