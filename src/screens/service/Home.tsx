import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { HomeHeader } from "@/entities/header";
import { TimeList } from "@/widget/time-list";
import { TodayHabits } from "@/widget/today-habits";
import { BottomCalendar } from "@/widget/bottom-calendar";
import { StatusHabits } from "@/widget/status-habits";
import { CounterSheet } from "@/features/habit-management";
import { useHabits } from "@/features/habit-management/lib/hooks/useHabits";
import { EmptyHabits } from "@/shared/ui/Animations";
import { useHabitStore } from "@/entities/habit/lib/state/HabitStore";
const Home = () => {
  const { isSuccess, data, isPending } = useHabits();
  const { updateAllHabits } = useHabitStore();

  useEffect(() => {
    if (isSuccess) {
      updateAllHabits(data);
    }
  }, [isSuccess]);

  if (isPending) return null;
  return (
    <>
      <ScreenContent px={20}>
        <HomeHeader />
        <TimeList />
        {data?.length !== 0 ? (
          <ScrollView
            style={
              {
                // marginBottom:50
              }
            }
            showsVerticalScrollIndicator={false}
          >
            <TodayHabits />
            <StatusHabits />
            <CounterSheet />
          </ScrollView>
        ) : (
          <EmptyHabits />
        )}
      </ScreenContent>
      {data?.length != 0 && <BottomCalendar />}
    </>
  );
};

export default Home;
