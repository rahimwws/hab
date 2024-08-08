import { View, Text, ScrollView, Switch } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Habit } from "@/entities/habit/model/types";
import { HabitSheet } from "@/shared/ui/BottomSheet";
import { Card } from "@/entities/habit";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";
import { formatDateSheet } from "../model/format/formatDate";

const CalendarSheet = ({
  habits,
  currentDate,
}: {
  habits: Habit[];
  currentDate: string;
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    if (habits) {
      bottomSheetRef.current?.present();
    }
  }, [habits]);
  const closeSheet = () => {
    bottomSheetRef.current?.close();
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <HabitSheet
      ref={bottomSheetRef}
      title="Calendar"
      action={closeSheet}
      showHeader={false}
      snapPoints={["35%", "60%"]}
    >
      <View>
        <Typography align="left" font="p-m" size={18}>
          {formatDateSheet(currentDate)}
        </Typography>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography align="left" font="p-m" size={16} color="gray400">
          Do you want to get notification?
        </Typography>
        <Switch
          trackColor={{ false: colors.gray200, true: colors.success }}
          thumbColor={isEnabled ? colors.white : "#f4f3f4"}
          ios_backgroundColor={colors.gray200}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
        />
      </View>

      <ScrollView
        style={{
          flex: 1,
          marginTop: 20,
        }}
        contentContainerStyle={{
          gap: 10,
        }}
      >
        {habits.map((habit, index: number) => {
          return <Card card={habit} key={index} />;
        })}
      </ScrollView>
    </HabitSheet>
  );
};

export default CalendarSheet;
