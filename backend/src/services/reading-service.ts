import { db } from '../data/connection';
import { ErrorHandling, Reading, ReadingResponse, UserId } from '../models';
import { createErrorPromise } from './error-service';

const addBookToShelf = async (
  request: Reading,
  headers: UserId
): Promise<ReadingResponse | ErrorHandling> => {
  const { bookId, status, rating } = request;

  const userId = headers.id;

  if (!userId || !bookId || !status) {
    return createErrorPromise('Crucial data missing');
  }
  if (status === 'read') {
    await db
      .query(
        `INSERT INTO reading (userid, bookid, status, rating) VALUES (?, ?, ?, ?)`,
        [userId, bookId, status, rating]
      )
      .catch(error => {
        throw new Error(`database error: ${error.message}`);
      });

    return {
      message: 'Book added to database',
    };
  } else {
    await db
      .query(`INSERT INTO reading (userid, bookid, status) VALUES (?, ?, ?)`, [
        userId,
        bookId,
        status,
      ])
      .catch(error => {
        throw new Error(`database error: ${error.message}`);
      });
    console.log('fool');
    return {
      message: 'Book added to database',
    };
  }
};

export const readingService = {
  addBookToShelf,
};
