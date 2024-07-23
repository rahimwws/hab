export const ProgressFormat = (remain: number, total: number): number => {
  if (total <= 0) {
    return 0;
  }
  if (remain === total) {
    return 0;
  }
  const progress = 1 - remain / total;
  return Math.min(Math.max(progress, 0), 1);
};
