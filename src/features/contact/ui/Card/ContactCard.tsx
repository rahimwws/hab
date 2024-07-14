import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import colors from "@/shared/lib/theme/colors";
import { Typography } from "@/shared/ui/Typography";

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
  const [added, setAdded] = useState(false);
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
        <Image
          source={{ uri: image }}
          style={{
            width: 35,
            height: 35,
            borderRadius: 20,
            zIndex: 1,
          }}
        />
        <View style={{}}>
          <Typography size={16} font="p-m" align="left">
            {name}
          </Typography>
          <Typography size={14} font="p-m" align="left" color="gray400">
            {number}
          </Typography>
        </View>
      </View>
      <TouchableOpacity
        style={{
          paddingHorizontal: 15,
          backgroundColor: added ? colors.success : colors.primary400,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          height: 30,
        }}
        onPress={() => {
          setAdded(true);
          action && action();
        }}
      >
        <Typography color="white" font="p-m" size={14}>
          {added ? "Added" : "Invite"}
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default ContactCard;
