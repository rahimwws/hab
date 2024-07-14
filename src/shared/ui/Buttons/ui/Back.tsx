import { TouchableOpacity, View } from "react-native";
import React from "react";
import ArrowLeft from "@/shared/assets/icons/interface/ArrowLeft";
import colors from "@/shared/lib/theme/colors";
import { useAppNavigation } from "@/shared/config/navigation";
import { LightHeptic } from "@/shared/lib/heptics/LightHeptic";

const Back = ({
  back = true,
  route = "",
  action = false,
}: {
  back?: boolean;
  route?: string;
  action?: Function | false;
}) => {
  const navigation = useAppNavigation();
  const HandlePress = () => {
    LightHeptic();
    back ? navigation.goBack() : navigation.navigate(route);
    action && action();
  };
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.gray200,
        zIndex: 1,
        left: 0,
      }}
      onPress={HandlePress}
    >
      <ArrowLeft size={20} />
    </TouchableOpacity>
  );
};

export default Back;
