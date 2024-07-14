import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Complete, Fail, Plus, Timer } from "@/shared/assets";
import colors from "@/shared/lib/theme/colors";
import { useAppNavigation } from "@/shared/config/navigation";
import { Habit } from "@/entities/habit/model/types/habit";
import { useCounterState } from "@/features/habit-management/lib/state/counterState";
import { useTimerState } from "../lib/state/timerState";

const Button = ({
  status = "doing",
  type = "default",
  card,
}: {
  status?: "success" | "failed" | "doing";
  type?: "timer" | "counter" | "default";
  card: Habit;
}) => {
  const navigation = useAppNavigation();
  const { addHabit } = useCounterState();
  const { addHabitTime } = useTimerState();
  const action = () => {
    if (type === "timer" && status === "doing") {
      addHabitTime(card);
      navigation.navigate("Timer");
    }
    if (type === "counter" && status === "doing") {
      addHabit(card);
    }
  };
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor:
          status === "failed"
            ? colors.error
            : status === "success"
            ? colors.success
            : colors.gray200,
      }}
      onPress={action}
    >
      {status === "failed" ? (
        <Fail />
      ) : status === "success" ? (
        <Complete />
      ) : type === "timer" ? (
        <Timer />
      ) : (
        <Plus />
      )}
    </TouchableOpacity>
  );
};

export default Button;
