export default ({ type, remain, total }: {
    type: "timer" | "counter" | "default",
    remain: number,
    total?: number | undefined,
}) => {
    if (type === "timer") {
        const roundedRemain = Math.floor(remain);
        return `${roundedRemain}/${total} min`;
    }
    if (type === "counter") {
        return `${remain}/${total}`;
    } else {
        return remain
    }
}