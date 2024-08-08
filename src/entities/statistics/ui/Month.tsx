import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { Typography } from "@/shared/ui/Typography";
const Month = ({ month }: { month: string }) => {
  const width = useWindowDimensions();
  return (
    <View
      style={{
        height: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography font="p-m">{month}</Typography>
    </View>
  );
};

export default Month;
