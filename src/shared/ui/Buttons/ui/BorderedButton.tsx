import { StyleProp, ViewStyle } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "@/shared/lib/theme/colors";
import { Typography } from "../../Typography";

const BorderedButton = ({
  text,
  showBorder = false,
  action,
  styles,
}: {
  text: string;
  showBorder?: boolean;
  action: () => void;
  styles?: StyleProp<ViewStyle>;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: showBorder ? "transparent" : colors.primary900,
        width: 120,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        borderWidth: showBorder ? 1 : 0,
        borderColor: colors.gray400,
        ...(styles as Object),
      }}
      onPress={action}
    >
      <Typography color={showBorder ? "primary900" : "white"} font="p-m">
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

export default BorderedButton;
