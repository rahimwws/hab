import React, { useState } from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { StackHeader } from "@/entities/header";
import { Card, Sheet } from "@/features/journey";
import { useGetJourney } from "@/features/journey/lib/hooks";
import { Habit } from "@/entities/habit/model/types/Habit";
const Journey = () => {
  const [habit, setHabit] = useState<Habit>();
  const { data } = useGetJourney();

  if (!data) return null;
  return (
    <>
      <ScreenContent>
        <StackHeader title="Journey" back={false} align="flex-start" />
        {data.map((item, index) => {
          return (
            <Card
              journey={item}
              key={index}
              activate={(habit) => setHabit(habit ?? undefined)}
            />
          );
        })}
      </ScreenContent>
      <Sheet habit={habit} close={(habit) => setHabit(habit)} />
    </>
  );
};

export default Journey;
