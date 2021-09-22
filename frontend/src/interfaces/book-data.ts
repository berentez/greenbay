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

export interface NewBook {
  author: string;
  title: string;
  genre: string;
  page: number;
  color: string;
}

export interface NewBookResponse {
  id?: number;
  author?: string;
  title?: string;
  genre?: string;
  page?: number;
  color?: string;
  message?: string;
  type?: string;
}
