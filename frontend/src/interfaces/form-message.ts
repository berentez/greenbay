export interface FormMessage {
  message: string;
  type: string;
  id?: number;
}

export interface LoginResponse {
  message: string;
  type: string;
  authorization?: string;
}
