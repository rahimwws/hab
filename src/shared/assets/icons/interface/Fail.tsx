import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import colors from "@/shared/lib/theme/colors";

const Fail = ({
  size = 20,
  color = colors.error,
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z"
        stroke={color}
        strokeWidth="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.9 5L4.90002 19"
        stroke={color}
        strokeWidth="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Fail;
