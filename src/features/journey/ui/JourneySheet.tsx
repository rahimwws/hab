import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { HabitSheet } from "@/shared/ui/BottomSheet/idnex";
import { Habit } from "@/entities/habit/model/types/Habit";
import { LargeButton } from "@/shared/ui/Buttons";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";
import { More, Timer } from "@/shared/assets";
import { useCreateHabit } from "../lib/hooks";
import { useAppNavigation } from "@/shared/config/navigation";

const JourneySheet = ({
  habit,
  close,
}: {
  habit: Habit | undefined;
  close: React.Dispatch<React.SetStateAction<Habit | undefined>>;
}) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { mutate } = useCreateHabit();
  const navigation = useAppNavigation();
  useEffect(() => {
    if (habit) {
      bottomSheetRef.current?.present();
    }
  }, [habit]);
  const closeSheet = () => {
    bottomSheetRef.current?.close();
    close(undefined);
  };

  if (!habit) return null;

  const action = () => {
    mutate(habit.id, {
      onSuccess: () => {
        closeSheet();
        navigation.navigate("Home");
      },
      onError: () => {
        closeSheet();
        alert("Error creating habit, because this habit already exists");
      },
    });
  };
  return (
    <HabitSheet
      ref={bottomSheetRef}
      title="Create new habit?"
      action={closeSheet}
      showHeader={true}
      snapPoints={["45%"]}
    >
      <View
        style={{
          flex: 1,
          paddingTop: 10,
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            borderWidth: 1,
            borderColor: colors.gray200,
            borderRadius: 15,
            height: 150,
          }}
        >
          <View>
            <View
              style={{
                width: 100,
                height: 25,
                borderRadius: 50,
                backgroundColor: colors.gray100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography size={14} font="p-m">
                #{habit.category}
              </Typography>
            </View>
            <Typography size={20} font="p-sb" align="left">
              {habit.name}
            </Typography>
            <Typography color="gray400" align="left">
              {habit.description}
            </Typography>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: "auto",
              }}
            >
              <Typography color="success" font="p-m">
                {habit.total} {habit.measure}
              </Typography>
              <Timer color={colors.success} />
              <Typography color="success" font="p-m">
                • 21 days
              </Typography>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              closeSheet();
              navigation.navigate("HabitDetail", { habit });
            }}
          >
            <More />
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignSelf: "flex-end",
            marginTop: "auto",
            width: "100%",
            bottom: 20,
          }}
        >
          <LargeButton text="Create" action={action} isRoute={false} />
        </View>
      </View>
    </HabitSheet>
  );
};

export default JourneySheet;
