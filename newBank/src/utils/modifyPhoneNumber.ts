export const modifyPhoneNumber = (phone: string | undefined) => {
  const modifiedPhone = `+${phone?.slice(0, 3)} ${phone?.slice(
    3,
    5
  )} ${phone?.slice(5, 8)}-${phone?.slice(8, 10)}-${phone?.slice(10, 12)}`;
  return modifiedPhone;
};
