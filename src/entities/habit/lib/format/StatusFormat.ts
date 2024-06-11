export default ({ type, remain, total }: {
    type: "timer" | "counter" | "default",
    remain?: number,
    total?: number | undefined,
}) => {
    if (type === "timer") {
        return `${remain}/${total} min`;
    }
    if (type === "counter") {
        return `${remain}/${total}`;
    } else {
        return remain
    }
}