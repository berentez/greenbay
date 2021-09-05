export interface LoginReq {
  username: string;
  password: string;
}

export interface LoginRes {
  authorization: string;
  status?: string;
  message?: string;
}
