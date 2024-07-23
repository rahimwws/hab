export const checkInitial = (remain: number, total: number): number => {
  if (remain === total) return total * 60;
  return (total - (total - remain)) * 60;
};
