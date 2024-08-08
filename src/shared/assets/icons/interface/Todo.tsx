import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import colors from "@/shared/lib/theme/colors";

const Todo = ({ position = true }: { position?: boolean }) => {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      style={{
        position: position ? "absolute" : "static",
        top: position ? 10 : 0,
        left: position ? 10 : 0,
        zIndex: position ? 1 : 0,
      }}
    >
      <Path
        d="M12.8701 8.88H18.1201"
        stroke={colors.primary900}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.87988 8.88L7.62988 9.63L9.87988 7.38"
        stroke={colors.primary900}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.8701 15.88H18.1201"
        stroke={colors.primary900}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.87988 15.88L7.62988 16.63L9.87988 14.38"
        stroke={colors.primary900}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
        stroke="#171717"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Todo;
