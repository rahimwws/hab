import { View, Text } from "react-native";
import React from "react";
import { useHabitStore } from "@/entities/habit/lib/state/HabitStore";
import { Typography } from "@/shared/ui/Typography";
import StatusSection from "./StatusSection";
import { checkStatus } from "../lib/check-status";

const StatusHabits = () => {
  const { habits } = useHabitStore();
  if (!habits) return;
  const sections = checkStatus(habits);
  if (habits.length === 0) return null;
  return (
    <View style={{ marginTop: 10 }}>
      <Typography align="left" font="p-sb" size={20} styles={{ marginTop: 20 }}>
        {sections.length !== 0 && "All Habits"}
      </Typography>
      {sections.map((section, index) => (
        <StatusSection
          key={index}
          title={section.title}
          color={section.color as "gray400" | "success" | "error"}
          status={section.status}
          habits={habits}
        />
      ))}
    </View>
  );
};

export default StatusHabits;
