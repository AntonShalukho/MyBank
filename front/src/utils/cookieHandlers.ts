export const setCookie = (
  name: string,
  value: string,
  options: Record<string, string> = {}
) => {
  const cookieOptions = {
    "max-age": "86400",
    ...options,
  };
  const updatedCookie = `${name}=${value}`;
  const stringifyedOptions = Object.entries(cookieOptions).reduce(
    (acc, [key, value]) => `${acc + key}=${value}`,
    ""
  );
  document.cookie = `${updatedCookie}; ${stringifyedOptions}`;
};

export const deleteCookie = (name: string) => {
  setCookie(name, "", {
    "max-age": "-1",
  });
};

export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(
      `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1")}=([^;]*)`
    )
  );
  return matches ? matches[1] : undefined;
};
