import { db } from '../data/connection';
import {
  ChangeReadingStatus,
  DbResult,
  ErrorHandling,
  Reading,
  ReadingResponse,
  UserId,
  DeleteReadingRequest,
} from '../models';
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
  if (status === 'finished') {
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
    return {
      message: 'Book added to database',
    };
  }
};

const updateBookStatus = async (
  request: ChangeReadingStatus,
  headers: UserId
): Promise<ReadingResponse | ErrorHandling> => {
  const { bookId, status, rating } = request;
  const userId = headers.id;

  if (!userId || !bookId || !status) {
    return createErrorPromise('Crucial data missing');
  }

  const readingData: DbResult = await db
    .query(
      `SELECT * FROM reading WHERE userid = ? AND bookid = ? AND status = "current" OR status = "want to read"`,
      [userId, bookId]
    )
    .catch(error => {
      throw new Error(`database error: ${error.message}`);
    });

  const reading: Reading = readingData.results[0] as Reading;

  if (!reading) {
    return createErrorPromise(`Reading not found!`);
  } else {
    if (status === 'current') {
      await db
        .query(`UPDATE reading SET status = "current" WHERE id = ?`, [
          reading.id,
        ])
        .catch(error => {
          throw new Error(`database error: ${error.message}`);
        });
    } else if (status === 'finished') {
      await db
        .query(
          `UPDATE reading SET status = "finished", rating = ? WHERE id = ?`,
          [rating, reading.id]
        )
        .catch(error => {
          throw new Error(`database error: ${error.message}`);
        });
    }
    return {
      message: `Successful update!`,
    };
  }
};

const deleteBookFromShelf = async (
  request: DeleteReadingRequest,
  headers: UserId
): Promise<ReadingResponse | ErrorHandling> => {
  const { id } = request;
  const userId = headers.id;

  if (!userId || !id) {
    return createErrorPromise('Crucial data missing');
  }

  await db
    .query(`DELETE from reading WHERE id = ? AND userId = ?`, [id, userId])
    .catch(error => {
      throw new Error(`database error: ${error.message}`);
    });
  return {
    message: `Succesful deletion!`,
  };
};

export const readingService = {
  addBookToShelf,
  updateBookStatus,
  deleteBookFromShelf,
};
