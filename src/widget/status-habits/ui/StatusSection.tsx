import { View, Text } from "react-native";
import React from "react";
import { Typography } from "@/shared/ui/Typography";
import { Habit } from "@/entities/habit/model/types";
import { Card } from "@/entities/habit";
import colors from "@/shared/lib/theme/colors";
import { statusForToday } from "@/shared/lib/complete";

const StatusSection = ({
  title,
  color,
  status,
  habits,
}: {
  title: string;
  color: keyof typeof colors;
  status: string;
  habits: Habit[];
}) => {
  // TODO: new logic for status filter
  return (
    <>
      <Typography
        align="left"
        font="p-m"
        color={color}
        styles={{ marginVertical: 5 }}
      >
        {title}
      </Typography>
      <View style={{ gap: 10 }}>
        {habits
          .filter((habit) => statusForToday(habit) === status)
          .map((habit, index) => (
            <Card card={habit} key={index} />
          ))}
      </View>
    </>
  );
};

export default StatusSection;
