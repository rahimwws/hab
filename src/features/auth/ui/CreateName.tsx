import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppNavigation } from "@/shared/config/navigation";
import { useAuthStore } from "../model/store/authStore";
import { Input } from "@/shared/ui/Inputs";
import Danger from "@/shared/assets/icons/interface/Danger";
import { Typography } from "@/shared/ui/Typography";
import { LargeButton } from "@/shared/ui/Buttons";
import { useCheck } from "../lib/hooks/useCheck";

const CreateName = () => {
  const { setName, setUsername, username } = useAuthStore();
  const { mutate, isError, isSuccess } = useCheck(username);

  const navigation = useAppNavigation();
  const [error, setError] = useState<boolean>(false);
  const action = () => {
    if (!error) navigation.navigate("Password");
  };

  useEffect(() => {
    if (isError) setError(true);
    if (isSuccess) setError(false);
  }, [isError, isSuccess]);
  return (
    <>
      <View style={{ gap: 5 }}>
        <Input
          placeholder="@username"
          styles={{
            marginTop: 30,
          }}
          onChangeText={(text) => setUsername(text)}
          error={error}
          action={() => mutate()}
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
              This username is already exist
            </Typography>
          </View>
        )}
        <Input
          placeholder="Enter Your Name"
          styles={{ marginTop: 10 }}
          onChangeText={(text) => setName(text)}
        />
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

export default CreateName;
