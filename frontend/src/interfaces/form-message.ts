export interface FormMessage {
  message: string;
  type: string;
}

export interface LoginResponse {
  message: string;
  type: string;
  authorization?: string;
}
