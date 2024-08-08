import React, { useEffect, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { HomeHeader } from "@/shared/ui/Header";
import { TimeList } from "@/widget/time-list";
import { TodayHabits } from "@/widget/today-habits";
import { BottomCalendar } from "@/widget/bottom-calendar";
import { StatusHabits } from "@/widget/status-habits";
import { CounterSheet } from "@/features/management";
import { useHabits } from "@/features/management/lib/hooks";
import { EmptyHabits } from "@/shared/ui/Animations";
import { useHabitStore } from "@/entities/habit/lib/state/HabitStore";

const Home = () => {
  const { refetch, data, isSuccess } = useHabits();
  const { habits, updateAllHabits } = useHabitStore();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (isSuccess && data) {
      updateAllHabits(data);
    }
  }, [isSuccess, data, updateAllHabits]);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  if (!habits) return null;
  return (
    <>
      <ScreenContent px={20}>
        <HomeHeader />
        <TimeList />
        {habits.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <TodayHabits habits={habits} />
            <StatusHabits />
            <CounterSheet />
          </ScrollView>
        ) : (
          <EmptyHabits />
        )}
      </ScreenContent>
      {habits.length > 0 && <BottomCalendar />}
    </>
  );
};

export default Home;
