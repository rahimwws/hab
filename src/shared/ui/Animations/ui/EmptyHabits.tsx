import { View, Text } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { Typography } from "../../Typography";
import { LargeButton } from "../../Buttons";

const EmptyHabits = () => {
  const animation = useRef<LottieView>(null);
  return (
    <>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LottieView
          autoPlay
          ref={animation}
          onAnimationFinish={() => {
            animation.current?.pause();
          }}
          style={{
            width: 300,
            height: 300,
          }}
          source={require("../../../assets/json/empty-habits.json")}
        />
        <View style={{ marginTop: -20, zIndex: 1 }}>
          <Typography size={32} font="p-sb" styles={{ marginBottom: 10 }}>
            Your List is Empty
          </Typography>

          <Typography color="gray400" size={18} font="p-m">
            You currently have no habits to show. Please create habits and start
            your journey
          </Typography>
        </View>
      </View>
      <View
        style={{
          alignSelf: "flex-end",
          marginTop: "auto",
          width: "100%",
          marginBottom: -20,
        }}
      >
        <LargeButton text="Create Habit" isRoute={false} />
      </View>
    </>
  );
};

export default EmptyHabits;
