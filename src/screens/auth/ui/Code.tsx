import { View, Text, Platform, KeyboardAvoidingView } from "react-native";
import React from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { Back } from "@/shared/ui/Buttons";
import ratio from "@/shared/lib/theme/ratio";
import { Typography } from "@/shared/ui/Typography";
import VerifyCode from "@/features/auth/ui/VerifyCode";

const Code = () => {
  return (
    <ScreenContent>
      <Back />
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            marginTop: ratio.width * 0.15,
          }}
        >
          <Typography align="left" size={22} font="p-b">
            Verification Code
          </Typography>
          <Typography align="left" font="p-r" color="gray400">
            Enter your code sent to your email to verify account on Habits
          </Typography>
          <VerifyCode />
        </View>
      </KeyboardAvoidingView>
    </ScreenContent>
  );
};

export default Code;
