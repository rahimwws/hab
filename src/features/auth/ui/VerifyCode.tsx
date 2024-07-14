import { View, Text, Keyboard } from "react-native";
import React, { useState } from "react";
import Opt from "@/shared/ui/Opt/Opt";
import { useAppNavigation } from "@/shared/config/navigation";
import { LargeButton } from "@/shared/ui/Buttons";

const VerifyCode = () => {
  const check = "12345";
  const navigation = useAppNavigation();
  const [opt, setOpt] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const OptAction = (code: string) => {
    if (code === check) {
      Keyboard.dismiss();
      setOpt(true);
      setSuccess(true);
      return true;
    } else {
      setError(true);
    }
  };
  return (
    <>
      <View>
        <Opt action={OptAction} error={error} success={success} />
      </View>
      <View
        style={{
          alignSelf: "flex-end",
          marginTop: "auto",
          width: "100%",
          marginBottom: 10,
        }}
      >
        <LargeButton
          text="Continue"
          isRoute={true}
          route="Service"
          disabled={!opt}
        />
      </View>
    </>
  );
};

export default VerifyCode;
