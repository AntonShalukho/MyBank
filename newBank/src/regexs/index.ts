export const passportRegEx = /^[a-zA-Z0-9]*$/;
export const phoneRegex =
  /^((\+375)[ ]([0-9]){2}[ ]([0-9]){3}[-]([0-9]){2}[-]([0-9]){2})$/;
export const secretQuestionRegex =
  /^[a-zA-Z0-9! "',/:;<>?[\]\\^`{|~}@#$%^&*)(+=._-]*$/;
export const passwordRegExp =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~])[A-Za-z\d[!"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~]{12,50}$/;
export const exchangeAmountRegExp = /(?![.0])^\d*\.?\d{0,2}$/;
export const infoNameRegExp =
  /^(?![\s!"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~)]+\r?$)[A-Za-z\s!"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~)]+\r?$/;
export const emailsRegExp = /^[A-Za-z0-9\-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // eslint-disable-line
export const ibanRegExp =
  /^([A-Z0-9]{4})(\d{4})(\d{4})(\d{4})(\d{4})(\d{4})(\d{4})$/;
export const peselRegExp = /^[0-9]*$/;
export const dataRegExp = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
export const phonePLRegExp =
  /^((\+48)[ ]([0-9]){3}[ ]([0-9]){3}[ ]([0-9]){3})$/;
export const onlyLetters = /^[a-zA-Zа-яА-Я]*$/;
export const onlyLatinLetters = /^[a-zA-Z.-]*$/;
export const onlyLatinWithNumbers = /^[a-zA-Z0-9]*$/;
export const onlyLatinDoteSpaceDash = /^[a-zA-Z][a-zA-Z.\- ]*[a-zA-Z]$/;
export const onlyLatinDoteSpaceDashWithoutTrailingSpaces =
  /^[a-zA-Z.-][a-zA-Z.\- ]*[a-zA-Z.-]$/;
export const onlyLatinDigitsDoteSpaceDashWithoutTrailingSpaces =
  /^[0-9a-zA-Z.-][0-9a-zA-Z.\- ]*[0-9a-zA-Z.-]$/;
// eslint-disable-next-line
export const onlyLatinSymbolsNumbers = /^[a-zA-Z0-9!"',\/:;<>?\[\]\\\^`{|~}@#$%^&*()+=._-]*$/;
