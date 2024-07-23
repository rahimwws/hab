import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";
import { Complete, Plus } from "@/shared/assets";

const Card = ({
  username,
  action,
}: {
  username: string;
  action: () => void;
}) => {
  const [accept, setAccept] = useState<boolean>(false);
  return (
    <View
      style={{
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 20,
        padding: 10,
        borderColor: colors.gray200,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Typography align="left" font="p-m">
          @{username}
        </Typography>
        <Typography size={12} color="gray400" align="left">
          Hello I want to be your friends 👋
        </Typography>
      </View>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: !accept ? colors.gray200 : colors.success,
        }}
        onPress={() => {
          action();
          setAccept(true);
        }}
      >
        {!accept ? <Plus /> : <Complete />}
      </TouchableOpacity>
    </View>
  );
};

export default Card;
