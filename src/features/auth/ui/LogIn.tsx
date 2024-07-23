import React, { useEffect, useState } from "react";
import { Input } from "@/shared/ui/Inputs";
import { View } from "react-native";
import { Typography } from "@/shared/ui/Typography";
import Danger from "@/shared/assets/icons/interface/Danger";
import { LargeButton } from "@/shared/ui/Buttons";
import { useAppNavigation } from "@/shared/config/navigation";
import { useLogin } from "../lib/hooks/useLogin";

const Register = () => {
  const navigation = useAppNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutate, isError, isSuccess } = useLogin(email, password);
  useEffect(() => {
    if (isSuccess) navigation.navigate("Screens");
  }, [isSuccess]);
  return (
    <>
      <View style={{ gap: 5 }}>
        <Input
          placeholder="Enter your Email"
          styles={{ marginTop: 30 }}
          type="email-address"
          onChangeText={(text) => setEmail(text)}
          error={isError}
        />
        <Input
          placeholder="Enter your Password"
          styles={{ marginTop: 10 }}
          type="default"
          onChangeText={(text) => setPassword(text)}
          error={isError}
          password={true}
        />
        {isError && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Danger size={20} />
            <Typography align="left" size={14} color="error">
              This account doesn't exist
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
        <LargeButton text="Continue" isRoute={false} action={() => mutate()} />
      </View>
    </>
  );
};

export default Register;
