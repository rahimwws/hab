import { Habit } from "@/src/entities/habit/lib/types/habit";

export default (habit: Habit,step:number) => {
    const updatedHabit: Habit = { ...habit, remain: habit.remain - step };
    return updatedHabit;
}