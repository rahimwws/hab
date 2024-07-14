import { View, Text, StyleProp, TextStyle } from "react-native";
import React from "react";
import colors from "@/shared/lib/theme/colors";
import { TextProps } from "react-native-svg";
type AlignSetting = "auto" | "left" | "right" | "center" | "justify";
type Props = {
  children: React.ReactNode;
  size?: number;
  color?: keyof typeof colors;
  font?: string;
  align?: AlignSetting;
  styles?: StyleProp<TextStyle>;
  textProps?: TextProps;
};
const Typography = ({
  children,
  size = 16,
  color = "primary900",
  font = "p-r",
  align = "center",
  styles,
  textProps,
}: Props) => {
  return (
    <Text
      style={{
        fontFamily: font,
        fontSize: size,
        color: colors[color],
        textAlign: align,
        ...(styles as Object),
      }}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export default Typography;
