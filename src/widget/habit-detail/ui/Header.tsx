import { View, Text } from "react-native";
import React from "react";
import { Typography } from "@/shared/ui/Typography";
import { Todo } from "@/shared/assets";
import { Habit } from "@/entities/habit/model/types";

const DetailHeader = ({ habit }: { habit: Habit }) => {
  const completionPercentage =
    ((habit.total - habit.remain) / habit.total) * 100;

  const viewHeight = 150 * (completionPercentage / 100);
  const calculateDaysBetween = (startDate: Date, endDate: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    return Math.round(
      Math.abs(
        (new Date(endDate).getTime() - new Date(startDate).getTime()) / oneDay
      )
    );
  };
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Typography align="left" font="p-sb" size={24}>
        {habit.name} {habit.emoji}
      </Typography>
      <Typography align="left" color="gray400">
        {habit.description}
      </Typography>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "49%",
            height: 150,
            backgroundColor: "#eff1ff",
            borderRadius: 15,
            justifyContent: "flex-end",
          }}
        >
          <Todo />
          <Typography
            align="left"
            size={32}
            font="p-m"
            styles={{ zIndex: 1, marginLeft: 10 }}
          >
            {Math.round(completionPercentage)}%
          </Typography>
          <Typography
            size={14}
            align="left"
            color="gray400"
            font="p-m"
            styles={{ zIndex: 1, marginLeft: 10, marginBottom: 5 }}
          >
            Progress for today
          </Typography>
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: viewHeight,
              backgroundColor: "#ced9fb",
              borderRadius: 15,
              bottom: 0,
              left: 0,
            }}
          ></View>
        </View>
        <View
          style={{
            height: 150,
            width: "49%",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <View
            style={{
              height: 72,
              width: "100%",
              backgroundColor: "#eff1ff",
              borderRadius: 15,
              padding: 10,
              justifyContent: "center",
            }}
          >
            <Typography align="left" size={20} font="p-m">
              {calculateDaysBetween(habit.startDate, habit.endDate)} days
            </Typography>
            <Typography align="left" color="gray400">
              Period
            </Typography>
          </View>
          <View
            style={{
              height: 72,
              width: "100%",
              backgroundColor: "#eff1ff",
              borderRadius: 15,
              padding: 10,
              justifyContent: "center",
            }}
          >
            <Typography align="left" size={20} font="p-m">
              Once a day
            </Typography>
            <Typography align="left" color="gray400">
              Repetitions
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailHeader;
