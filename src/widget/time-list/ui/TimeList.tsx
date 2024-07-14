import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import TimeItem from "./TimeItem";
import { LightHeptic } from "@/shared/lib/heptics/LightHeptic";
import { useTimeStore } from "../lib/state/TimeStore";

const TimeList = () => {
  const { times, selectedTime, setTime } = useTimeStore();
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        {times.map((time: "All" | "Morning" | "Afternoon" | "Evening") => (
          <TouchableOpacity
            key={time}
            onPress={() => {
              LightHeptic();
              setTime(time);
            }}
          >
            <TimeItem
              active={selectedTime === time}
              type={time as "Morning" | "Afternoon" | "Evening"}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TimeList;
