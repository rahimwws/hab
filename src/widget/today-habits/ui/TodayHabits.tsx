import { View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";
import { Card } from "@/entities/habit";
import today from "../model/format/today";
import { useTimeStore } from "../../time-list";
import { countSuccessHabits } from "../model/format/success-number";
import { useTodayDay } from "../lib/todayState";
import { compareDate } from "../model/format/compareDate";
import { statusForToday } from "@/shared/lib/complete";
import { TodayAnimation } from "@/shared/ui/Animations";
import { Habit } from "@/entities/habit/model/types";

const TodayHabits = ({ habits }: { habits: Habit[] }) => {
  const [title, setTitle] = useState<string | false>(false);
  const selectedTime = useTimeStore((store) => store.selectedTime);
  const todayDate = useTodayDay((store) => store.todayDate);
  const todayHabits = useMemo(
    () => today({ habits, selectedTime, today: todayDate }),
    [habits, selectedTime, todayDate]
  );
  const successNumber = useMemo(
    () => countSuccessHabits(todayHabits),
    [todayHabits]
  );
  const habitsDoing = useMemo(
    () => todayHabits.filter((item) => statusForToday(item) === "doing"),
    [todayHabits]
  );

  useEffect(() => {
    setTitle(compareDate(title, todayDate));
  }, [todayDate]);
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
