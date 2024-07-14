import React from "react";
import { View } from "react-native";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";
import { Complete } from "@/shared/assets";
import Animated from "react-native-reanimated";
import useFadeInOut from "../lib/hooks/useFadeInOut";

type MiniMessageProps = {
  title: string;
  status: "success" | "failed" | "default";
  action: () => void;
};

const MiniMessage: React.FC<MiniMessageProps> = ({ title, status, action }) => {
  const animatedStyle = useFadeInOut({
    duration: 500,
    delay: 2000,
    onFinish: action,
  });

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          top: 0,
          backgroundColor:
            status === "success" ? colors.success100 : colors.gray50,
          padding: 10,
          alignItems: "center",
          gap: 10,
          flexDirection: "row",
          borderRadius: 7,
          alignSelf: "center",
          zIndex: 1,
        },
        animatedStyle,
      ]}
    >
      <Complete />
      <Typography
        color={status === "success" ? "success" : "gray400"}
        font="p-m"
      >
        {title}
      </Typography>
    </Animated.View>
  );
};

export default MiniMessage;
