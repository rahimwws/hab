import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Typography } from "@/shared/ui/Typography";
import { Calendar, HomeIcon, Map, Pen } from "@/shared/assets";
import { TextInput } from "react-native-gesture-handler";
import colors from "@/shared/lib/theme/colors";
import { SmallButton } from "@/shared/ui/Buttons";
import { useAppNavigation } from "@/shared/config/navigation";

const HomeHeader = () => {
  const [title, setTitle] = useState<string>("My journey");
  const [showInput, setShowInput] = useState<boolean>(false);
  const navigation = useAppNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {showInput ? (
        <TextInput
          autoFocus={true}
          style={{
            fontSize: 22,
            fontFamily: "p-sb",
            color: colors.primary900,
          }}
          onEndEditing={() => setShowInput(false)}
          onChangeText={(text) => setTitle(text)}
        />
      ) : (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Typography size={22} font="p-sb">
            {title}
          </Typography>
          <TouchableOpacity onPress={() => setShowInput(true)}>
            <Pen />
          </TouchableOpacity>
        </View>
      )}
      <SmallButton
        icon={<Calendar color={colors.primary900} size={22} />}
        action={() => navigation.navigate("Calendar")}
      />
    </View>
  );
};

export default HomeHeader;
