import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/shared/lib/theme/colors";
import { Typography } from "@/shared/ui/Typography";
import { SmallButton } from "@/shared/ui/Buttons";
import { ArrowLeft, ArrowRight } from "@/shared/assets";
import { useAppNavigation } from "@/shared/config/navigation";

const FriendCard = () => {
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      style={{
        marginVertical: 10,
        borderColor: colors.gray200,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      onPress={() =>
        navigation.navigate("FriendDetail", { name: "Rahym Hudaykulyyev" })
      }
    >
      <View
        style={{
          width: "80%",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Image
          source={require("@/shared/assets/images/avatar.jpg")}
          style={{
            width: 35,
            height: 35,
            borderRadius: 20,
            zIndex: 1,
          }}
        />
        <View style={{}}>
          <Typography size={16} font="p-m" align="left">
            Rahym Hudaykulyyev
          </Typography>
          <Typography size={14} font="p-m" align="left" color="primary400">
            @rahimwws
          </Typography>
          <Typography size={12} font="p-m" align="left" color="gray400">
            Age 18,Mobile Developer
          </Typography>
        </View>
      </View>
      <SmallButton action={() => {}} icon={<ArrowRight />} />
    </TouchableOpacity>
  );
};

export default FriendCard;
