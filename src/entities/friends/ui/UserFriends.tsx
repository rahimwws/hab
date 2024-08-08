import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import FriendCard from "./Card/FriendCard";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";
import { EmptyFriends } from "@/shared/ui/Animations";
import { useFriends } from "../lib/hooks/friends";

const UserFriends = ({
  isRelation = false,
  habitId = false,
}: {
  isRelation?: boolean;
  habitId?: number | false;
}) => {
  const { data } = useFriends();

  return (
    <View>
      <Typography align="left" font="p-sb" size={20} styles={{ zIndex: 1 }}>
        Your Friends
      </Typography>
      {data?.length !== 0 ? (
        data?.map((friend, key) => (
          <FriendCard
            key={key}
            friend={friend}
            isRelation={isRelation}
            habitId={habitId}
          />
        ))
      ) : (
        <EmptyFriends isRelation={isRelation} />
      )}
      {data?.length !== 0 && !isRelation && (
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
      )}
    </View>
  );
};

export default UserFriends;
