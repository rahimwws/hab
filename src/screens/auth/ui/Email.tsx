import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { Typography } from "@/shared/ui/Typography";
import { Back, LargeButton } from "@/shared/ui/Buttons";
import ratio from "@/shared/lib/theme/ratio";
import { Register } from "@/features/auth";

const Email = () => {
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
            Let’s Get Started
          </Typography>
          <Typography align="left" font="p-r" color="gray400">
            Create your Habit account
          </Typography>
          <Register />
        </View>
      </KeyboardAvoidingView>
    </ScreenContent>
  );
};

export default Email;
