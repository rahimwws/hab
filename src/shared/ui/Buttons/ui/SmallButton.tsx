import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/shared/lib/theme/colors";
import { LightHeptic } from "@/shared/lib/heptics/LightHeptic";

const SmallButton = ({
  showBorder = true,
  icon,
  action,
}: {
  icon: React.ReactNode;
  action?: Function;
  showBorder?: boolean;
}) => {
  const HandleClick = () => {
    LightHeptic();
    action && action();
  };
  return (
    <TouchableOpacity
      style={{
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: showBorder ? 1 : 0,
        borderColor: colors.gray200,
      }}
      onPress={HandleClick}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default SmallButton;
