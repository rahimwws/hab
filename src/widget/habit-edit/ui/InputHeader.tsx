import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Typography } from "@/shared/ui/Typography";
import { Input } from "@/shared/ui/Inputs";
import { Habit } from "@/entities/habit/model/types";
import useEditHabitStore from "@/features/management/lib/state/editStore";

const InputHeader = ({ habit }: { habit: Habit | null }) => {
  const { name, description, setDescription, setName } = useEditHabitStore(
    (store) => {
      return {
        name: store.habit.name,
        description: store.habit.description,
        setName: store.setName,
        setDescription: store.setDescription,
      };
    }
  );
  useEffect(() => {
    if (habit) {
      setDescription(habit.description);
      setName(habit.name);
    }
  }, [habit]);
  return (
    <View>
      <Typography
        align="left"
        styles={{ marginTop: 20, marginBottom: 5 }}
        size={18}
        font="p-m"
      >
        Title
      </Typography>
      <Input
        defaultValue={name}
        placeholder="Enter title"
        onChangeText={(text) => setName(text)}
      />
      <Typography
        align="left"
        styles={{ marginTop: 20, marginBottom: 5 }}
        size={18}
        font="p-m"
      >
        Description
      </Typography>
      <Input
        defaultValue={description}
        placeholder="Enter description"
        onChangeText={(text) => setDescription(text)}
      />
    </View>
  );
};

export default InputHeader;
