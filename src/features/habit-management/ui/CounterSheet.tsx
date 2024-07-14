import { View, Text, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { HabitSheet } from "@/shared/ui/BottomSheet/idnex";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCounterState } from "../lib/state/counterState";
import { useHabitStore } from "@/entities/habit/lib/state/HabitStore";
import { LargeButton } from "@/shared/ui/Buttons";
import { Typography } from "@/shared/ui/Typography";
import * as ProgressBar from "react-native-progress";
import colors from "@/shared/lib/theme/colors";
import { Award } from "@/shared/assets";
import { ProgressFormat } from "@/entities/habit/lib/format/ProgressFormat";
import { useStatus } from "../lib/hooks/mutation";

const CounterSheet = () => {
  const [id, setId] = useState<number>(0);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { habit, updateCounter, removedHabit } = useCounterState();
  const { mutate } = useStatus(id, "success");
  const { updateHabit } = useHabitStore();

  useEffect(() => {
    if (habit) {
      bottomSheetRef.current?.present();
      setId(habit.id);
    }
  }, [habit]);

  useEffect(() => {
    if (habit) {
      updateHabit(habit);
      if (habit.remain === 0) mutate();
    }
  }, [habit, updateHabit]);

  const closeSheet = () => {
    bottomSheetRef.current?.close();
    removedHabit();
  };
  if (!habit) return null;
  return (
    <HabitSheet ref={bottomSheetRef} title="Daily Update" action={closeSheet}>
      <Typography
        align="left"
        color="primary400"
        font="p-sb"
        size={22}
        styles={{ marginVertical: 10 }}
      >
        {habit.total - habit.remain} {habit.measure}
      </Typography>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ProgressBar.Bar
          color={colors.primary400}
          unfilledColor={colors.gray200}
          progress={ProgressFormat(habit.remain, habit.total)}
          borderColor={colors.gray200}
          width={300}
          height={10}
          borderRadius={50}
        />
        <Award color={colors.success} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography styles={{ marginVertical: 5 }} color="gray400">
          {Math.round(ProgressFormat(habit.remain, habit.total) * 100)}%
        </Typography>
        <Typography styles={{ marginVertical: 5 }} color="gray400">
          Goal {habit.total} {habit.measure}
        </Typography>
      </View>
      <View
        style={{
          alignSelf: "flex-end",
          width: "100%",
          marginTop: "auto",
          marginBottom: 20,
        }}
      >
        <LargeButton
          text="Detail"
          isRoute={false}
          action={() => updateCounter(1)}
          heptic={true}
          violet={false}
        />
        <LargeButton
          text="Add +1"
          isRoute={false}
          action={() => updateCounter(1)}
          heptic={true}
        />
      </View>
    </HabitSheet>
  );
};

export default CounterSheet;
