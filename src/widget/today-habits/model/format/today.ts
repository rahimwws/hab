import { Habit } from "@/entities/habit/model/types/habit";

const isTodayInDateRange = (
  startDate: Date,
  endDate: Date,
  today: Date
): boolean => {
  today.setHours(0, 0, 0, 0);
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);
  return today >= startDate && today <= endDate;
};

const filterHabitsByTime = (habits: Habit[], time: string) => {
  const filteredHabits = habits.filter((habit) => {
    if (time === "All") {
      return true;
    }

    const hours = parseInt(habit.time.split(":")[0]);
    if (time === "Morning" && hours >= 5 && hours < 12) {
      return true;
    } else if (time === "Afternoon" && hours >= 12 && hours < 18) {
      return true;
    } else if (time === "Evening" && hours >= 18 && hours <= 23) {
      return true;
    } else {
      return false;
    }
  });

  return filteredHabits;
};

export default ({
  habits,
  selectedTime,
  today,
}: {
  habits: Habit[];
  selectedTime: string;
  today: Date;
}) => {
  const todayHabits = habits.filter((item) => {
    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate);
    return isTodayInDateRange(startDate, endDate, today);
  });

  return filterHabitsByTime(todayHabits, selectedTime);
};
