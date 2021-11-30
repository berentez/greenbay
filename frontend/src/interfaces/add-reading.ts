export interface AddReadingReq {
  bookId: number;
  status: string;
  rating?: number;
  finish: string;
}
