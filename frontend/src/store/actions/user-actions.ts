export const SAVE_TOKEN = 'SAVE_TOKEN';
export const LOGOUT_USER = 'LOGOUT_USER';

export const saveToken = (token: string) => ({
  type: SAVE_TOKEN,
  payload: token,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
