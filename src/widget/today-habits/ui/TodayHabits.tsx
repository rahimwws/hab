import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";
import { Card } from "@/entities/habit";
import { useHabitStore } from "@/entities/habit/lib/state/HabitStore";
import today from "../model/format/today";
import { useTimeStore } from "../../time-list";
import { countSuccessHabits } from "../model/format/success-number";
import { useTodayDay } from "../lib/todayState";
import { compareDate } from "../model/format/compareDate";
import { statusForToday } from "@/shared/lib/complete";
import { TodayAnimation } from "@/shared/ui/Animations";

const TodayHabits = () => {
  const { habits } = useHabitStore();
  const { selectedTime } = useTimeStore();
  const [title, setTitle] = useState<string | false>(false);
  const { todayDate } = useTodayDay();

  const todayHabits = today({ habits: habits, selectedTime, today: todayDate });

  const successNumber = countSuccessHabits(todayHabits);
  useEffect(() => {
    setTitle(compareDate(title, todayDate));
  }, [todayDate]);
  const habitsDoing = todayHabits.filter(
    (item) => statusForToday(item) === "doing"
  );

  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: -10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginBottom: 10,
        }}
      >
        <Typography align="left" font="p-sb" size={20}>
          {title}
        </Typography>
        <View
          style={{
            height: 25,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.primary900,
            paddingHorizontal: 10,
          }}
        >
          <Typography color="white" font="p-m">
            {successNumber}/{todayHabits.length}
          </Typography>
        </View>
      </View>
      <View
        style={{
          gap: 10,
        }}
      >
        {todayHabits.map((item, index) => {
          if (statusForToday(item) === "doing")
            return (
              <View style={{ gap: 5 }} key={index}>
                <Typography align="left" font="p-m" color="gray400">
                  {item.time}
                </Typography>
                <Card card={item} />
              </View>
            );
        })}

        {habitsDoing.length === 0 && <TodayAnimation />}
      </View>
    </View>
  );
};

export default TodayHabits;
