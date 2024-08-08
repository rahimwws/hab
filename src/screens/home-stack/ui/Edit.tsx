import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/shared/config/navigation/types";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { StackHeader } from "@/shared/ui/Header";
import { Habit } from "@/entities/habit/model/types";
import { EditCalendar } from "@/features/calendar";
import {
  Emoji,
  InputHeader,
  Relations,
  TimePicker,
  Total,
} from "@/widget/habit-edit";
import { LargeButton } from "@/shared/ui/Buttons";
import useEditHabitStore from "@/features/management/lib/state/editStore";

import { useAppNavigation } from "@/shared/config/navigation";
import { Trash } from "@/shared/assets";
import {
  createHabit,
  deleteHabit,
  editHabit,
} from "@/features/management/lib/hooks";
type EditRouteProp = RouteProp<RootStackParamList, "Edit">;
const Edit = () => {
  const { edited, reset } = useEditHabitStore((store) => {
    return { edited: store.habit, reset: store.resetHabit };
  });
  const route = useRoute<EditRouteProp>();
  const [habit, setHabit] = useState<Habit | false>();
  const { mutate } = editHabit();
  const { mutate: create } = createHabit();
  const { mutate: mutateDelete } = deleteHabit();
  const navigation = useAppNavigation();
  useEffect(() => {
    if (route.params?.habit) setHabit(route.params.habit);
    else {
      reset();
      setHabit(false);
    }
  }, [route.params]);
  const action = () => {
    if (habit) {
      mutate(
        { habit: edited, id: habit.id },
        {
          onSuccess: () => {
            reset();
            navigation.navigate("Service");
          },
        }
      );
    } else {
      create(
        {
          habit: {
            remain: edited.total,
            type: "timer",
            completedDays: [],
            category: "",
            ...edited,
          },
        },
        {
          onSuccess: () => {
            reset();
            navigation.navigate("Service");
          },
        }
      );
    }
  };
  return (
    <ScreenContent>
      <StackHeader
        title={habit ? habit.name : "Create Habit"}
        customButton={
          <TouchableOpacity
            onPress={() => {
              if (habit) {
                mutateDelete(
                  { id: habit.id },
                  { onSuccess: () => navigation.navigate("Service") }
                );
              } else {
                alert("You cannot delete habit because it does not exist");
              }
            }}
          >
            <Trash />
          </TouchableOpacity>
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: "5%", paddingTop: "2%" }}
      >
        <InputHeader habit={habit ? habit : null} />
        <EditCalendar habit={habit ? habit : null} />
        <TimePicker habit={habit ? habit : null} />
        <Emoji habit={habit ? habit : null} />
        <Total habit={habit ? habit : null} />
        <Relations habit={habit ? habit : null} />
      </ScrollView>
      <LargeButton text="Save" isRoute={false} action={action} />
    </ScreenContent>
  );
};

export default Edit;
