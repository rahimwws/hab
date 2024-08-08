import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import colors from "@/shared/lib/theme/colors";

const ArrowRight = ({
  right = true,
  size = 24,
  color = colors.primary900,
}: {
  right?: boolean;
  size?: number;
  color?: string;
}) => {
  if (right) {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M10 7L15 12L10 17"
          stroke={color}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  } else {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M14 7L9 12L14 17"
          stroke={color}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  }
};

export default ArrowRight;
