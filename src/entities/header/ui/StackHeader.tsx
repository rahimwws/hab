import { View, Text } from "react-native";
import React from "react";
import { Back } from "@/shared/ui/Buttons";
import { Typography } from "@/shared/ui/Typography";

const StackHeader = ({
  title,
  action = false,
  back = true,
  align = "center",
  customButton = false,
}: {
  title: string;
  action?: Function | false;
  back?: boolean;
  align?: "center" | "flex-start" | "space-between";
  customButton?: React.ReactNode | false;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: align,
      }}
    >
      {back && <Back action={action} />}
      <Typography font="p-b" size={24}>
        {title}
      </Typography>
      {customButton}
    </View>
  );
};

export default StackHeader;
