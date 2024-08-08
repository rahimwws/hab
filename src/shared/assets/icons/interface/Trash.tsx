import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import colors from "@/shared/lib/theme/colors";

const Trash = () => {
  return (
    <Svg width="27" height="27" viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={colors.error}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.9001 9.04997C15.7201 8.82997 13.5201 8.71997 11.3301 8.71997C10.0301 8.71997 8.73009 8.78997 7.44009 8.91997L6.1001 9.04997"
        stroke={colors.error}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.70996 8.38994L9.84996 7.52994C9.94996 6.90994 10.03 6.43994 11.14 6.43994H12.86C13.97 6.43994 14.0499 6.92994 14.1499 7.52994L14.2899 8.37994"
        stroke={colors.error}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.49 9.12988L16.06 15.7299C15.99 16.7599 15.93 17.5599 14.1 17.5599H9.89C8.06 17.5599 7.99999 16.7599 7.92999 15.7299L7.5 9.12988"
        stroke={colors.error}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Trash;
