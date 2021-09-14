import { db, pool } from '../data/connection';
import { Book, DbResult, ErrorHandling, GetDataBaseBook } from '../models';
import { createErrorPromise } from './error-service';
import { pickRandomColor } from './random-color-service';

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

const addBookToDb = async (request: Book): Promise<Book | ErrorHandling> => {
  const { author, title, page, genre } = request;
  let { color } = request;

  if (!author || !title || !page) {
    return createErrorPromise(
      'Author, title and the number of pages required.'
    );
  }
  if (!color) {
    color = pickRandomColor();
  }

  const data: DbResult = await db
    .query(`SELECT * FROM book WHERE author LIKE ? AND title LIKE ?`, [
      author,
      title,
    ])
    .catch(error => {
      throw new Error(`database error: ${error.message}`);
    });

  if (data.results.length > 0) {
    return createErrorPromise('Book is already in the database.');
  }

  const poolPromise = (): Promise<Book> =>
    new Promise(resolve => {
      pool.getConnection((error, connection) => {
        if (error) {
          throw new Error(`Database connection error: ${error.message}`);
        }
        connection.beginTransaction(error => {
          if (error) {
            throw new Error(`Database connection error: ${error.message}`);
          }

          connection.query(
            `INSERT INTO book (author, title, page, color, genre) VALUES (?,?,?,?,?)`,
            [author, title, page, color, genre],
            error => {
              if (error) {
                return connection.rollback(() => {
                  throw new Error(`database error: ${error.message}`);
                });
              }
            }
          );

          connection.query(
            `SELECT * FROM book WHERE author = ? AND title = ?`,
            [author, title],
            (error, result) => {
              if (error) {
                return connection.rollback(() => {
                  throw new Error(`database error: ${error.message}`);
                });
              }
              const response: Book = result[0] as Book;

              connection.commit(error => {
                if (error) {
                  return connection.rollback(() => {
                    throw new Error(`database error: ${error.message}`);
                  });
                }
                resolve(response);
              });
            }
          );
        });
        connection.release();
      });
    });
  return await poolPromise().catch(error => {
    throw new Error(`database error: ${error.message}`);
  });
};

export const bookService = {
  getRandomBooks,
  addBookToDb,
};
