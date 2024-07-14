import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import colors from "@/shared/lib/theme/colors";

const Complete = ({
  size = 20,
  color = colors.success,
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        d="M4.5 9L7.68198 12.182L14.0453 5.81799"
        stroke={color}
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Complete;
