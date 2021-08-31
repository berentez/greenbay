export const checkPassword = (psw: string): boolean => {
  let res: boolean = true;

  if (psw.length < 7) res = false;

  return res;
};
