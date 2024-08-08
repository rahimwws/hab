import { View, Text } from "react-native";
import React from "react";
import { ArrowDown, ArrowUp, Calendar } from "@/shared/assets";
import { Typography } from "@/shared/ui/Typography";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "@/shared/lib/theme/colors";
interface DateRowProps {
  label: "Start Date" | "End Date";
  date: string;
  onPress: () => void;
  expanded: boolean;
  setType: React.Dispatch<React.SetStateAction<"start" | "end" | undefined>>;
}
export const DateRow = ({
  label,
  date,
  onPress,
  expanded,
  setType,
}: DateRowProps) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderTopWidth: label === "End Date" ? 1 : 0,
      borderColor: label === "End Date" ? colors.gray200 : "transparent",
      paddingTop: label === "End Date" ? 15 : 0,
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
      <Calendar size={24} />
      <Typography align="left" font="p-m">
        {label}
      </Typography>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
      <Typography>{date || "Choose"}</Typography>
      <TouchableOpacity
        onPress={() => {
          setType(label === "Start Date" ? "start" : "end");
          onPress();
        }}
      >
        {expanded ? <ArrowDown /> : <ArrowUp />}
      </TouchableOpacity>
    </View>
  </View>
);
