import React, { useEffect, useState } from "react";
import { Input } from "@/shared/ui/Inputs";
import { View } from "react-native";
import { Typography } from "@/shared/ui/Typography";
import { useAuthStore } from "../model/store/authStore";
import { useRegister } from "../lib/hooks/useRegister";
import { LargeButton } from "@/shared/ui/Buttons";
import { useAppNavigation } from "@/shared/config/navigation";

const CreatePassword = () => {
  const navigation = useAppNavigation();
  const { password, setPassword, email, username, name } = useAuthStore();
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const { mutate, isSuccess, errorMessage } = useRegister(
    email,
    password,
    username,
    name
  );
  const action = () => {
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        setError(false);
        mutate();
      } else {
        setError(true);
      }
    }
  };
  useEffect(() => {
    if (isSuccess) navigation.navigate("Screens");
    if (errorMessage) setError(true);
  }, [errorMessage, isSuccess]);
  return (
    <>
      <View>
        <Input
          placeholder="Create Password"
          styles={{ marginTop: 30 }}
          type="default"
          password={true}
          onChangeText={(text: string) => setPassword(text)}
        />
        <Input
          placeholder="Verify Password"
          styles={{ marginTop: 10 }}
          type="default"
          password={true}
          onChangeText={(text: string) => {
            setConfirmPassword(text);
          }}
          action={action}
        />
        {error && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginTop: 5,
              marginLeft: 5,
            }}
          >
            <Typography
              align="left"
              size={14}
              color={errorMessage ? "error" : "yellow"}
              font="p-m"
            >
              {errorMessage ? errorMessage : "Passwords must match!"}
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

export default CreatePassword;
