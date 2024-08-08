import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackHeader } from "@/shared/ui/Header";
import { RootStackParamList } from "@/shared/config/navigation/types";
import { Habit } from "@/entities/habit/model/types";
import { Typography } from "@/shared/ui/Typography";
import { DetailDate, DetailHeader } from "@/widget/habit-detail";
import { HabitFriends, Tracking } from "@/entities/statistics";
import Motivation from "@/widget/habit-detail/ui/Motivation";
import { LargeButton } from "@/shared/ui/Buttons";
import { useCounterState } from "@/features/management/lib/state/counterState";
import { useTimerState } from "@/features/management/lib/state/timerState";
import { statusForToday } from "@/shared/lib/complete";
import { useAppNavigation } from "@/shared/config/navigation";
type HabitDetailRouteProp = RouteProp<RootStackParamList, "HabitDetail">;
const HabitDetail = () => {
  const route = useRoute<HabitDetailRouteProp>();
  const navigation = useAppNavigation();
  const [habit, setHabit] = useState<Habit | null>(null);
  const addHabit = useCounterState((store) => store.addHabit);
  const addHabitTime = useTimerState((store) => store.addHabitTime);
  const action = () => {
    if (habit) {
      const currentStatus = statusForToday(habit);
      if (currentStatus === "doing") {
        if (habit.type === "timer") {
          addHabitTime(habit);
          navigation.navigate("Timer");
        }
        if (habit.type === "counter") {
          addHabit(habit);
        }
      } else {
        alert("This is habit finished for today");
      }
    }
  };
  useEffect(() => {
    if (route?.params?.habit) {
      setHabit(route.params.habit);
    }
  }, [route]);

  if (!habit) return null;
  return (
    <ScreenContent>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: "30%", paddingTop: "2%" }}
      >
        <StackHeader
          title=""
          customButton={
            <TouchableOpacity
              onPress={() => navigation.navigate("Edit", { habit })}
            >
              <Typography>Edit</Typography>
            </TouchableOpacity>
          }
        />

        <DetailHeader habit={habit} />
        <DetailDate startDate={habit.startDate} endDate={habit.endDate} />
        <Typography
          align="left"
          color="gray400"
          styles={{ marginVertical: 10 }}
        >
          Progress and Tracking
        </Typography>
        <Tracking
          startDate={habit.startDate}
          endDate={habit.endDate}
          completedDays={habit.completedDays}
        />
        <HabitFriends habit={habit} />
        <Motivation />
      </ScrollView>
      <LargeButton text="Continue" isRoute={false} action={action} />
    </ScreenContent>
  );
};

export default HabitDetail;
