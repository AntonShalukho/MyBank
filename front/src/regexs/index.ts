export const passportRegEx = /^[a-zA-Z0-9]*$/;
export const phoneRegex =
  /^((\+375)[ ]([0-9]){2}[ ]([0-9]){3}[-]([0-9]){2}[-]([0-9]){2})$/;
export const secretQuestionRegex =
  /^[a-zA-Z0-9! "',/:;<>?[\]\\^`{|~}@#$%^&*)(+=._-]*$/;
export const passwordRegExp =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~])[A-Za-z\d[!"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~]{6,20}$/;
export const exchangeAmountRegExp = /(?![.0])^\d*\.?\d{0,2}$/;
export const infoNameRegExp =
  /^(?![\s!"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~)]+\r?$)[A-Za-z\s!"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~)]+\r?$/;
export const emailsRegExp =
  /^(?!.*?-)([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
export const ibanRegExp =
  /^([A-Z0-9]{4})(\d{4})(\d{4})(\d{4})(\d{4})(\d{4})(\d{4})$/;
