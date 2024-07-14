import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import colors from "@/shared/lib/theme/colors";
import { Share } from "@/shared/assets";
import { Typography } from "@/shared/ui/Typography";
import * as Clipboard from "expo-clipboard";
import { MiniMessage } from "@/features/notification";
import { LightHeptic } from "@/shared/lib/heptics/LightHeptic";

const ShareName = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const action = async () => {
    LightHeptic();
    await Clipboard.setStringAsync("habits.me/rahimwws");
    setCopied(true);
  };
  return (
    <>
      <TouchableOpacity
        style={{
          marginVertical: 20,
          borderRadius: 15,
          borderWidth: 1,
          height: 65,
          borderColor: colors.gray200,
          backgroundColor: colors.gray50,
          padding: 20,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
        onPress={action}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View>
            <Typography font="p-m" align="left">
              Invite friends to Habits
            </Typography>
            <Typography size={12} align="left" color="gray400">
              habits.me/rahimwws
            </Typography>
          </View>
        </View>
        <TouchableOpacity onPress={action}>
          <Share />
        </TouchableOpacity>
      </TouchableOpacity>
      {copied && (
        <MiniMessage
          title="Successfully Copied"
          status="success"
          action={() => setCopied(false)}
        />
      )}
    </>
  );
};

export default ShareName;
