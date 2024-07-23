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
        zIndex: 1,
        marginTop: "2%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: align,
        position: "relative",
      }}
    >
      {back && <Back action={action} />}
      <Typography font="p-b" size={24}>
        {title}
      </Typography>
      {customButton && (
        <View style={{ position: "absolute", right: 0 }}>{customButton}</View>
      )}
    </View>
  );
};

export default StackHeader;
