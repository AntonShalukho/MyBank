export const setSessionStorage = (name: string, value: string) => {
  sessionStorage.setItem(name, value);
};

export const deleteSessionStorage = (name: string) => {
  sessionStorage.removeItem(name);
};

export const getSessionStorage = (name: string) => sessionStorage.getItem(name);
