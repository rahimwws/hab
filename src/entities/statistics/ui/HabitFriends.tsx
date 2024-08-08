import { View, Text } from "react-native";
import React from "react";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";
import FriendCard from "@/entities/friends/ui/Card/FriendCard";
import { Habit } from "@/entities/habit/model/types";
import { useFriendFromHabit } from "@/features/management/lib/hooks";

const HabitFriends = ({ habit }: { habit: Habit }) => {
  const { data } = useFriendFromHabit({ id: habit.id });

  return (
    <View
      style={{
        marginTop: 10,
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
          This is your friends for this habit
        </Typography>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        {data?.map((friend, key) => (
          <FriendCard key={key} friend={friend} />
        ))}
      </View>
    </View>
  );
};

export default HabitFriends;
