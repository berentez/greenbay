export interface SearchResponse {
  id: number;
  author: string;
  title: string;
  page: number;
  color: string;
  genre: string;
  status?: string;
}

export interface SearchError {
  message: string;
  status: string;
}

export interface SearchRequest {
  search: string;
}
