export interface BookInterface {
  id: number;
  author: string;
  title: string;
  genre: string;
  page: number;
  color: string;
  status?: string;
}

export interface BookData {
  books: Array<BookInterface>;
}
