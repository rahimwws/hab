import React, { useEffect, useState } from "react";
import { Calendar, DateData } from "react-native-calendars";
import colors from "@/shared/lib/theme/colors";
import { Habit } from "@/entities/habit/model/types/Habit";
import CalendarSheet from "./CalendarSheet";
import { LightHeptic } from "@/shared/lib/heptics/LightHeptic";
import { formatDate } from "../model/format/formatDate";
import { getHabitsForDate, getMarkedDates } from "../lib/data/getMarkedDates";

const CalendarComponent = ({ habits }: { habits: Habit[] }) => {
  const [currentDate, setCurrentDate] = useState<string>(
    formatDate(new Date())
  );
  const [markedDates, setMarkedDates] = useState<{
    [key: string]: {
      dots: { key: string; color: string; selectedDotColor: string }[];
    };
  }>({});
  const [selectedHabits, setSelectedHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const newMarkedDates = getMarkedDates(habits);
    setMarkedDates(newMarkedDates);
  }, [habits]);

  const handleDayPress = (day: DateData) => {
    LightHeptic();
    const dateString = day.dateString;
    setCurrentDate(dateString);
    const habitsForDate = getHabitsForDate(dateString, habits);
    setSelectedHabits(habitsForDate);
  };

  return (
    <>
      <Calendar
        style={{ height: 350, marginVertical: 10 }}
        current={currentDate}
        onDayPress={handleDayPress}
        markedDates={markedDates}
        markingType={"multi-dot"}
        theme={{
          todayTextColor: colors.primary400,
          textDayFontFamily: "p-r",
          textMonthFontFamily: "p-sb",
          textDayHeaderFontFamily: "p-r",
          monthTextColor: colors.primary900,
          arrowColor: colors.primary900,
        }}
      />
      {selectedHabits.length !== 0 && (
        <CalendarSheet habits={selectedHabits} currentDate={currentDate} />
      )}
    </>
  );
};

export default CalendarComponent;
