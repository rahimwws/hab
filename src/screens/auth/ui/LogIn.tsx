import { View, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { Back } from "@/shared/ui/Buttons";
import ratio from "@/shared/lib/theme/ratio";
import { Typography } from "@/shared/ui/Typography";
import { LoginAccount } from "@/features/auth";

const LogIn = () => {
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
            Wow!,you have account
          </Typography>
          <Typography align="left" font="p-r" color="gray400">
            Log In to your Habit account
          </Typography>
          <LoginAccount />
        </View>
      </KeyboardAvoidingView>
    </ScreenContent>
  );
};

export default LogIn;
