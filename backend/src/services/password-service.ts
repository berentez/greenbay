export const checkPassword = (psw: string): boolean => {
  if (psw.length < 7) {
    return true;
  } else {
    return false;
  }
};
