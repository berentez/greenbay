export interface SearchReq {
  search: string;
}

export interface SearchRes {
  id: number;
  title: string;
  author: string;
  genre: string;
  page: number;
  color: string;
}
