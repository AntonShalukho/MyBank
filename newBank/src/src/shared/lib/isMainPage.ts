export const isMainPage = (pathname: string): boolean => {
  if (pathname === "/") return true;

  return RegExp(/main/).test(pathname);
};
