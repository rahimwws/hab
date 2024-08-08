import { View, Text, Image } from "react-native";
import React from "react";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";
import { useFriendFromHabit } from "@/features/management/lib/hooks";

const Peoples = ({
  id,
  status,
  quantity,
}: {
  id: number;
  status: "private" | "public";
  quantity?: number;
}) => {
  const { data } = useFriendFromHabit({ id });
  if (status === "private") {
    return (
      <Typography size={14} color="gray400">
        private
      </Typography>
    );
  }
  if (quantity === 0 && status === "public") return null;
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {data?.slice(0, 2)?.map((friend, index) => (
        <Image
          key={index}
          source={{ uri: friend.avatarUrl }}
          style={{
            width: 25,
            height: 25,
            borderRadius: 20,
            zIndex: 1,
            marginRight: index === 0 ? -5 : 0,
          }}
        />
      ))}

      <View
        style={{
          backgroundColor: colors.gray200,
          alignItems: "center",
          justifyContent: "center",
          width: 25,
          height: 25,
          borderRadius: 25,
          zIndex: 1,
          marginLeft: -10,
        }}
      >
        <Typography size={13} color="primary400" font="p-m">
          +{quantity}
        </Typography>
      </View>
    </View>
  );
};

export default Peoples;
