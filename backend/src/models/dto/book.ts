export interface Book {
  id?: number;
  author: string;
  title: string;
  page: number;
  color: string;
}

export interface GetDataBaseBook {
  books: Array<Book>;
}
