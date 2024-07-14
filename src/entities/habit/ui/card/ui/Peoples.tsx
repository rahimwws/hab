import { View, Text, Image } from "react-native";
import React from "react";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";

const Peoples = ({
  status,
  quantity,
}: {
  status: "private" | "public";
  quantity?: number;
}) => {
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
      <Image
        source={require("@/shared/assets/images/avatar.jpg")}
        style={{
          width: 25,
          height: 25,
          borderRadius: 20,
        }}
      />
      <Image
        source={require("@/shared/assets/images/avatar.jpg")}
        style={{
          width: 25,
          height: 25,
          borderRadius: 20,
          zIndex: 1,
          marginLeft: -10,
        }}
      />
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
