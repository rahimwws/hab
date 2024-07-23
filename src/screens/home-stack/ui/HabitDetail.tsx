import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackHeader } from "@/entities/header";
import { RootStackParamList } from "@/shared/config/navigation/types";
import { Habit } from "@/entities/habit/model/types/Habit";
import { Typography } from "@/shared/ui/Typography";
import { DetailDate, DetailHeader } from "@/widget/habit-detail";
type HabitDetailRouteProp = RouteProp<RootStackParamList, "HabitDetail">;
const HabitDetail = () => {
  const route = useRoute<HabitDetailRouteProp>();
  const [habit, setHabit] = useState<Habit | null>(null);

  useEffect(() => {
    if (route?.params?.habit) {
      setHabit(route.params.habit);
    }
  }, [route]);

  if (!habit) return null;
  return (
    <ScreenContent>
      <StackHeader title="" customButton={<Typography>Edit</Typography>} />

      <DetailHeader
        name={habit.name}
        description={habit.description}
        remain={habit.remain}
        total={habit.total}
      />
      <DetailDate startDate={habit.startDate} endDate={habit.endDate} />
    </ScreenContent>
  );
};

export default HabitDetail;
