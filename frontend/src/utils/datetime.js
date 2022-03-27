export const dateDaysFromNow = days => {
  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + days);

  return currentDate.toUTCString();
};
