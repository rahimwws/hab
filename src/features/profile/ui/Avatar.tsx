import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { Typography } from "@/shared/ui/Typography";
import { Pen } from "@/shared/assets";
import colors from "@/shared/lib/theme/colors";
import { pickImageAsync } from "../model/config/pricker";
import { useChangeAvatar, useGetUser } from "../lib/hooks/profile";
import { User } from "../model/types/User";

const Avatar = ({ user }: { user: User }) => {
  const [imageUri, setImageUri] = React.useState<string | null>(user.avatarUrl);
  const { mutate } = useChangeAvatar();
  const action = async () => {
    const result = await pickImageAsync();
    if (!result || !result.assets || result.assets.length === 0) return;
    const uri = result.assets[0].uri;
    setImageUri(uri);
    mutate(uri);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: colors.gray100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        )}
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onPress={action}
        >
          <Pen size={25} />
        </TouchableOpacity>
      </View>
      <View>
        <Typography size={28} styles={{ width: 250 }} align="left" font="p-sb">
          {user.name}
        </Typography>
        <Typography size={18} align="left" font="p-m" color="primary400">
          @{user.username}
        </Typography>
      </View>
    </View>
  );
};

export default Avatar;
