import { ArrowLeft, ArrowRight, Timer } from "@/shared/assets";
import colors from "@/shared/lib/theme/colors";
import { HabitSheet } from "@/shared/ui/BottomSheet";
import { Typography } from "@/shared/ui/Typography";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useEffect, useRef, useState } from "react";
import { Switch, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { dateToTime, formatTime, timeToDate } from "../model/format";
import { Habit } from "@/entities/habit/model/types";
import useEditHabitStore from "../../../features/management/lib/state/editStore";

const TimePicker = ({ habit }: { habit: Habit | null }) => {
  const { date, setDate } = useEditHabitStore((store) => {
    return {
      date: store.habit.time,
      setDate: store.setDate,
    };
  });
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  useEffect(() => {
    if (habit) setDate(habit.time);
  }, [habit]);

  return (
    <>
      <View
        style={{
          borderWidth: 1,
          borderColor: colors.gray200,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Typography align="left" font="p-m" size={16} color="primary900">
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

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            borderColor: colors.gray200,
            borderTopWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Timer />
            <Typography font="p-m" size={16}>
              Time
            </Typography>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Typography size={18} font="p-m">
              {date}
            </Typography>
            <TouchableOpacity onPress={() => bottomSheetRef.current?.present()}>
              <ArrowRight size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <HabitSheet
        showHeader={false}
        action={() => bottomSheetRef.current?.close()}
        snapPoints={["30%"]}
        ref={bottomSheetRef}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <DatePicker
            date={timeToDate(date)}
            onDateChange={(date: Date) => setDate(dateToTime(date))}
            mode="time"
          />
        </View>
      </HabitSheet>
    </>
  );
};

export default TimePicker;
