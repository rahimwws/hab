import React, { useState } from "react";
import { Input } from "@/shared/ui/Inputs";
import { View } from "react-native";
import { Typography } from "@/shared/ui/Typography";
import Danger from "@/shared/assets/icons/interface/Danger";
import { EmailValid } from "@/shared/lib/format";
import { useAuthStore } from "../model/store/authStore";
import { LargeButton } from "@/shared/ui/Buttons";
import { useAppNavigation } from "@/shared/config/navigation";

const Register = () => {
  const navigation = useAppNavigation();
  const [error, setError] = useState<boolean>(false);
  const { setEmail, email } = useAuthStore();
  const action = () => {
    const check = EmailValid(email);
    if (check) {
      navigation.navigate("Username");
    } else {
      setError(true);
    }
  };
  return (
    <>
      <View style={{ gap: 5 }}>
        <Input
          type="email-address"
          placeholder="Enter Email"
          styles={{ marginTop: 30 }}
          onChangeText={(text) => setEmail(text)}
          action={action}
          error={error}
        />
        {error && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Danger size={20} />
            <Typography align="left" size={14} color="error">
              Please Enter a Valid Email Address
            </Typography>
          </View>
        )}
      </View>
      <View
        style={{
          alignSelf: "flex-end",
          marginTop: "auto",
          width: "100%",
          marginBottom: 10,
        }}
      >
        <LargeButton text="Continue" isRoute={false} action={action} />
      </View>
    </>
  );
};

export default Register;
