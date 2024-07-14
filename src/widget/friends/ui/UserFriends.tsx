import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FriendCard from "./Card/FriendCard";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";

const UserFriends = () => {
  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <Typography align="left" font="p-sb" size={20}>
        Your Friends
      </Typography>
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <TouchableOpacity
        style={{
          backgroundColor: colors.gray100,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 13,
          paddingHorizontal: 20,
          borderRadius: 10,
          width: 150,
          alignSelf: "center",
        }}
      >
        <Typography align="left" font="p-m" color="primary900">
          Show More
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default UserFriends;
