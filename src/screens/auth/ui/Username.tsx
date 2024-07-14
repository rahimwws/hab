import { View, Text, KeyboardAvoidingView } from "react-native";
import React from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { Typography } from "@/shared/ui/Typography";
import { Back, LargeButton } from "@/shared/ui/Buttons";
import ratio from "@/shared/lib/theme/ratio";
import { CreateName, Register } from "@/features/auth";

const Username = () => {
  return (
    <ScreenContent>
      <View style={{ zIndex: 1 }}>
        <Back />
      </View>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            marginTop: ratio.width * 0.15,
          }}
        >
          <Typography align="left" size={22} font="p-b">
            Create a name and username
          </Typography>
          <Typography align="left" font="p-r" color="gray400">
            with username you can add new friends
          </Typography>
          <CreateName />
        </View>
      </KeyboardAvoidingView>
    </ScreenContent>
  );
};

export default Username;
