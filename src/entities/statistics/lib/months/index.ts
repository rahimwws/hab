export const generateMonthsArray = (): string[] => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = 2024;
  return months.map((month) => `${month} ${year}`);
};
