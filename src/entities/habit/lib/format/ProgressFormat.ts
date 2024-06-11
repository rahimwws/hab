export const ProgressFormat = (remain: number, total: number): number => {

    // console.log(remain, total);

    if (remain <= 0 || total <= 0) {
        return 0;
    }
    if (remain === total) {
        return 1;
    }
    const progress = 1 - (remain / total);
    return Math.min(Math.max(progress, 0), 1);
};
