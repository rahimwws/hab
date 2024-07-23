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
        alignItems: "center",
      }}
    >
      <Typography size={14} font="p-m" color="primary400">
        {quantity === 1 ? `${quantity} Friend` : `${quantity} Friends`}
      </Typography>
    </View>
  );
};

export default Peoples;
