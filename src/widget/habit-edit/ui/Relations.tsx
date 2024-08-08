import { View, Text, Switch } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";
import { HabitSheet } from "@/shared/ui/BottomSheet";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { UserFriends } from "@/entities/friends";
import { Habit } from "@/entities/habit/model/types";
import useEditHabitStore from "@/features/management/lib/state/editStore";
import FriendCard from "@/entities/friends/ui/Card/FriendCard";
import { useFriendFromHabit } from "@/features/management/lib/hooks";

const Relations = ({ habit }: { habit: Habit | null }) => {
  const { data } = habit
    ? useFriendFromHabit({ id: habit.id })
    : { data: null };
  const { isEnabled, setIsEnabled, relation, friends } = useEditHabitStore(
    (store) => {
      return {
        friends: store.habit.relations,
        isEnabled: store.habit.public,
        setIsEnabled: store.setPublic,
        relation: store.setRelation,
      };
    }
  );
  const toggleSwitch = () => {
    if (!isEnabled) {
      bottomSheetRef.current?.present();
    }
    setIsEnabled(!isEnabled);
  };
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  useEffect(() => {
    if (habit) setIsEnabled(habit.public);
    if (habit?.relations) {
      habit.relations.forEach((item) => {
        relation(Number(item));
      });
    }
  }, [habit]);
  return (
    <>
      <View
        style={{
          marginVertical: 10,
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
            Do you want add friends?
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
            paddingHorizontal: 10,
          }}
        >
          {data?.map((friend, key) => (
            <FriendCard key={key} friend={friend} isRelation />
          ))}
        </View>
      </View>
      <HabitSheet
        showHeader={false}
        title=""
        action={() => {}}
        snapPoints={["30%", "50%"]}
        ref={bottomSheetRef}
      >
        <BottomSheetScrollView>
          <UserFriends isRelation habitId={habit ? habit.id : false} />
        </BottomSheetScrollView>
      </HabitSheet>
    </>
  );
};

export default Relations;
