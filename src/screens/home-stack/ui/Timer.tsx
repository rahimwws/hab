import React, { useCallback, useState } from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { Back, LargeButton } from "@/shared/ui/Buttons";
import { View } from "react-native";
import { useTimerState } from "@/features/management/lib/state/timerState";
import { Countdown } from "@/features/management";
import { StackHeader } from "@/entities/header";
import { Typography } from "@/shared/ui/Typography";

const Timer = () => {
  const { habit } = useTimerState();
  const [timer, setTimer] = useState(false);
  if (!habit) return null;
  return (
    <ScreenContent styles={{ gap: 30 }}>
      <StackHeader title="Timer" />
      <Typography styles={{ marginVertical: 20 }} size={22} font="p-sb">
        {habit.name}
      </Typography>
      <Countdown timer={timer} habit={habit} />
      <View
        style={{
          width: "100%",
          alignSelf: "flex-end",
          marginTop: "auto",
        }}
      >
        <LargeButton
          text={!timer ? "Start" : "Stop"}
          isRoute={false}
          action={() => setTimer(!timer)}
        />
      </View>
    </ScreenContent>
  );
};

export default Timer;
