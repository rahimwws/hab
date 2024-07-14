import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";
import { Typography } from "../../Typography";

const TodayHabits = () => {
  const [start, setStop] = useState<boolean>(false);
  useEffect(() => {
    setStop(true);
    let timerId: NodeJS.Timeout;
    if (start) {
      timerId = setTimeout(() => {
        animation.current?.pause();
      }, 2000);
    }
    return () => clearTimeout(timerId);
  }, [start]);
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
          onAnimationLoaded={() => {}}
          style={{
            marginTop: -20,
            width: 200,
            height: 200,
          }}
          source={require("../../../assets/json/today-habits.json")}
        />
        <Typography
          color="yellow"
          font="p-m"
          size={18}
          styles={{ marginTop: -20 }}
        >
          You don't have habits for today!
        </Typography>
      </View>
    </>
  );
};

export default TodayHabits;
