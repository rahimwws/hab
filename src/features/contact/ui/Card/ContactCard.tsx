import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import colors from "@/shared/lib/theme/colors";
import { Typography } from "@/shared/ui/Typography";
import { Invite } from "@/shared/ui/Buttons";

const ContactCard = ({
  name,
  image,
  number,
  action,
}: {
  name?: string;
  image?: string;
  number?: string;
  action?: () => void;
}) => {
  return (
    <View
      style={{
        marginVertical: 10,
        borderColor: colors.gray200,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 15,
      }}
    >
      <View
        style={{
          width: "80%",
          flexDirection: "row",
          gap: 10,
        }}
      >
        {image ? (
          <Image
            source={{ uri: image }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              zIndex: 1,
            }}
          />
        ) : (
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              zIndex: 1,
              backgroundColor: colors.gray200,
            }}
          ></View>
        )}
        <View style={{}}>
          <Typography size={16} font="p-m" align="left">
            {name}
          </Typography>
          {number && (
            <Typography size={14} font="p-m" align="left" color="gray400">
              {number}
            </Typography>
          )}
        </View>
      </View>
      <Invite action={action} />
    </View>
  );
};

export default ContactCard;
