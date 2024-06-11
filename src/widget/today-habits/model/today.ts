import { Habit } from "@/src/entities/habit/lib/types/habit";

const isTodayInDateRange = (startDate: Date, endDate: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    return today >= startDate && today <= endDate;
};
export default ({ habits }: { habits: Habit[] }) => {
    return habits.filter(item => {
        const startDate = new Date(item.startDate);
        const endDate = new Date(item.endDate);
        return isTodayInDateRange(startDate, endDate);
    })
};