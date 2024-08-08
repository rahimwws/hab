import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Typography } from "@/shared/ui/Typography";
import { Morning } from "@/shared/assets";
import { BorderedButton } from "@/shared/ui/Buttons";
import { Journey } from "../model/types";
import { Habit } from "@/entities/habit/model/types";

const JourneyCard = ({
  journey,
  activate,
}: {
  journey: Journey;
  activate: React.Dispatch<React.SetStateAction<Habit | undefined>>;
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#dee2ff",
        borderRadius: 15,
        marginVertical: 20,
        padding: 10,
      }}
      onPress={() => activate(journey.habit)}
    >
      <View
        style={{
          width: "60%",
          gap: 5,
        }}
      >
        <Typography align="left" size={18} font="p-sb">
          {journey.name}
        </Typography>
        <Typography align="left" size={12} color="gray400" font="p-m">
          {journey.description}
        </Typography>
        <BorderedButton
          text="Join now"
          action={() => {}}
          styles={{ marginTop: 10 }}
        />
      </View>
      <Morning />
    </TouchableOpacity>
  );
};

export default JourneyCard;
