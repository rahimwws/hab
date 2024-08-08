import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { Habit } from "@/entities/habit/model/types";
import colors from "@/shared/lib/theme/colors";
import { useExpandAnimation } from "@/entities/statistics/lib/animation";
import Animated from "react-native-reanimated";
import { Calendar, DateData } from "react-native-calendars";
import {
  dateFormat,
  parseDateString,
} from "@/entities/habit/model/date/dateFormat";
import { LightHeptic } from "@/shared/lib/heptics/LightHeptic";
import { DateRow } from "./DateRow";
import useEditHabitStore from "@/features/management/lib/state/editStore";

const EditCalendar = ({ habit }: { habit: Habit | null }) => {
  const { startDate, setStartDate, endDate, setEndDate } = useEditHabitStore(
    (store) => {
      return {
        startDate: store.habit.startDate,
        setStartDate: store.setStartDate,
        endDate: store.habit.endDate,
        setEndDate: store.setEndDate,
      };
    }
  );
  const { toggleExpand, animatedStyle, expanded } = useExpandAnimation(0, 350);
  const initialEndDate = new Date();
  initialEndDate.setDate(initialEndDate.getDate() + 21);

  const [type, setType] = useState<"start" | "end">();
  const handleDayPress = (day: DateData) => {
    LightHeptic();
    if (type === "start") {
      setStartDate(parseDateString(day.dateString));
    } else {
      setEndDate(parseDateString(day.dateString));
    }
  };

  useEffect(() => {
    if (habit) {
      setStartDate(new Date(habit.startDate));
      setEndDate(new Date(habit.endDate));
    }
  }, [habit]);

  const markedDates = useMemo(() => {
    if (type === "start") {
      return {
        [dateFormat(new Date(startDate))]: {
          selected: true,
          selectedColor: colors.success,
          customStyles: {
            container: {},
            text: { color: colors.white },
          },
        },
      };
    } else {
      return {
        [dateFormat(new Date(endDate))]: {
          selected: true,
          selectedColor: colors.error,
          customStyles: {
            container: {},
            text: { color: colors.white },
          },
        },
      };
    }
  }, [startDate, endDate, type]);

  return (
    <View
      style={{
        marginVertical: 20,
        backgroundColor: colors.primary50,
        padding: 10,
        borderRadius: 10,
        gap: 10,
      }}
    >
      <DateRow
        setType={setType}
        label="Start Date"
        date={dateFormat(new Date(startDate))}
        onPress={toggleExpand}
        expanded={expanded}
      />

      <Animated.View style={[{ overflow: "hidden" }, animatedStyle]}>
        <Calendar
          style={{
            height: 350,
            marginVertical: 10,
            backgroundColor: colors.primary50,
          }}
          markingType={"custom"}
          markedDates={markedDates}
          onDayPress={handleDayPress}
          theme={{
            todayTextColor: colors.primary900,
            dayTextColor: colors.primary900,
            textDayFontFamily: "p-r",
            textMonthFontFamily: "p-sb",
            textDayHeaderFontFamily: "p-r",
            monthTextColor: colors.primary900,
            arrowColor: colors.primary900,
            backgroundColor: colors.primary50,
            calendarBackground: colors.primary50,
          }}
        />
      </Animated.View>

      <DateRow
        setType={setType}
        label="End Date"
        date={dateFormat(new Date(endDate))}
        onPress={toggleExpand}
        expanded={expanded}
      />
    </View>
  );
};

export default EditCalendar;
