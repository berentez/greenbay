declare module 'http' {
  interface IncomingHttpHeaders {
    id: number;
  }
}

export interface UserId {
  id: number;
}
