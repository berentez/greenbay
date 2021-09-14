export interface BookInterface {
  author: string;
  title: string;
  genre: string;
  page: number;
  color: string;
}

export interface BookData {
  books: Array<BookInterface>;
}
