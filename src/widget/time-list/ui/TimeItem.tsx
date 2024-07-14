import { View, Text } from "react-native";
import React from "react";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";
import { Afternoon, Filter, Moon, Sun } from "@/shared/assets";
const typeColors = {
  All: {
    background: colors.primary400,
  },
  Morning: {
    background: colors.yellow,
  },
  Afternoon: {
    background: colors.error,
  },
  Evening: {
    background: colors.primary900,
  },
};
const iconComponents = {
  All: Filter,
  Morning: Sun,
  Afternoon: Afternoon,
  Evening: Moon,
};

const TimeItem = ({
  active,
  type,
}: {
  active: boolean;
  type: "Morning" | "Afternoon" | "Evening";
}) => {
  const activeColors = typeColors[type];
  const IconComponent = iconComponents[type];
  return (
    <View
      style={{
        height: 40,
        backgroundColor: active ? activeColors.background : colors.white,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        borderRadius: 10,
        flexDirection: "row",
        gap: 5,
      }}
    >
      <IconComponent color={active ? colors.white : colors.gray400} />
      <Typography color={active ? "white" : "gray400"} font="p-m">
        {type}
      </Typography>
    </View>
  );
};

export default TimeItem;
