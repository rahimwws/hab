import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Animated from "react-native-reanimated";
import { Typography } from "@/shared/ui/Typography";
import { Habit } from "@/entities/habit/model/types";
import { formatTime } from "../model/time/formatTime";
import { subtractSecondsFromRemain } from "../lib/timer/subtractSecondsFromRemain";
import { useTimerState } from "../lib/state/timerState";
import { useAnimatedCircle } from "../lib/hooks/useAnimatedCircle";
import LottieView from "lottie-react-native";
import {
  useAddCompleteDate,
  useStatus,
  useTimerLeft,
} from "../lib/hooks/mutation";
import { useHabitStore } from "@/entities/habit/lib/state/HabitStore";
import { statusForToday } from "@/shared/lib/complete";
import { dateFormat } from "@/entities/habit/model/date/dateFormat";
import { checkInitial } from "../model/time/checkInitial";
const Countdown = ({ timer, habit }: { timer: boolean; habit: Habit }) => {
  const { successItem, updateHabit } = useHabitStore();
  const { successTime } = useTimerState();
  const { mutate: complete } = useAddCompleteDate();
  const { mutate: remainMutation } = useTimerLeft();

  const { animatedStyle, startAnimation } = useAnimatedCircle();
  const animation = useRef<LottieView>(null);
  const handleUpdate = (remain: number) => {
    const updatedHabit = subtractSecondsFromRemain(habit, remain);
    if (Number.isInteger(updatedHabit.remain)) {
      remainMutation({ id: updatedHabit.id, remain: updatedHabit.remain });
      updateHabit(updatedHabit);
    }

    if (updatedHabit.remain === 0) {
      successItem(updatedHabit);
    }
    startAnimation();
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (statusForToday(habit) === "success") {
      timerId = setTimeout(() => {
        animation.current?.pause();
      }, 1500);
    }
    return () => clearTimeout(timerId);
  }, [habit]);

  return (
    <View style={{ alignItems: "center" }}>
      <CountdownCircleTimer
        isPlaying={timer}
        duration={habit.total * 60}
        colors={`#6B5AFA`}
        onUpdate={(remain) => handleUpdate(remain)}
        strokeWidth={20}
        size={300}
        onComplete={() => {
          complete({ id: habit.id, date: dateFormat(new Date()) });
          successTime();
          animation.current?.play(30, 300);
        }}
        trailStrokeWidth={5}
        trailColor={statusForToday(habit) === "success" ? "#12B76A" : "#e4e7ec"}
        initialRemainingTime={checkInitial(habit.remain, habit.total)}
      >
        {({ remainingTime }) => {
          return (
            <>
              {statusForToday(habit) === "success" ? (
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
                  source={require("../assets/json/fGyJxg8l0q (2).json")}
                />
              ) : (
                <Animated.View style={animatedStyle}>
                  <Typography size={64} font="p-m">
                    {formatTime(remainingTime)}
                  </Typography>
                </Animated.View>
              )}
            </>
          );
        }}
      </CountdownCircleTimer>
    </View>
  );
};

export default Countdown;
