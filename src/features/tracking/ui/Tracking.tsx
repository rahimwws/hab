import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TrackingBox } from "@/shared/ui/Box";
import { Typography } from "@/shared/ui/Typography";
import { completeDays } from "@/entities/habit/model/types";
import { dateFormat } from "@/entities/habit/model/date/dateFormat";

const Tracking = ({
  startDate,
  endDate,
  completedDays,
  month,
}: {
  startDate: Date;
  endDate: Date;
  completedDays: completeDays[];
  month: number;
}) => {
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  const data = [...new Array(31).keys()];
  const formattedCompletedDays = completedDays.map((day) => ({
    ...day,
    date: dateFormat(new Date(day.date)),
  }));
  const isDateBetween = (
    date: Date,
    startDate: Date,
    endDate: Date,
    month: number
  ): boolean => {
    const isDateInMonth = date.getMonth() === month;
    const isDateInRange = date >= startDate && date <= endDate;
    return isDateInMonth && isDateInRange;
  };
  return (
    <View>
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 5,
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => {
          const currentDate = new Date(startDateObj);
          currentDate.setDate(startDateObj.getDate() + index);
          const formattedDate = dateFormat(currentDate);

          const completedDay = formattedCompletedDays.find(
            (day) => day.date === formattedDate
          );

          if (!isDateBetween(currentDate, startDateObj, endDateObj, month)) {
            return (
              <TouchableOpacity key={index} style={{ marginBottom: 5 }}>
                <TrackingBox completed={false} free />
              </TouchableOpacity>
            );
          } else if (completedDay && completedDay.status === "success") {
            return (
              <TouchableOpacity key={index} style={{ marginBottom: 5 }}>
                <TrackingBox completed />
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity key={index} style={{ marginBottom: 5 }}>
                <TrackingBox completed={false} />
              </TouchableOpacity>
            );
          }
        })}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
          gap: 20,
          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <TrackingBox completed />
          <Typography>Completed</Typography>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <TrackingBox completed={false} />
          <Typography>Doing</Typography>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <TrackingBox completed={false} free />
          <Typography>Free</Typography>
        </View>
      </View>
    </View>
  );
};

export default Tracking;
