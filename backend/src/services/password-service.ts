export const checkPassword = (psw: string): boolean => {
  let res: boolean = false;

  if (psw.length < 7) res = true;

  return res;
};
