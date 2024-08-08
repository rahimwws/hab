import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const Minus = ({ color }: { color: string }) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 12H18"
        stroke={color}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Minus;
