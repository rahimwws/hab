import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import colors from "@/shared/lib/theme/colors";
import { Typography } from "@/shared/ui/Typography";
import { SmallButton } from "@/shared/ui/Buttons";
import { ArrowDown, Badge, Error, Verified } from "@/shared/assets";
import Animated from "react-native-reanimated";
import { Habit } from "@/entities/habit/model/types";
import {
  getFailedCount,
  getSuccessCount,
  getSuccessRate,
} from "../lib/summary/summary";
import { useExpandAnimation } from "../lib/animation";

const HabitStatistic = ({ habits }: { habits: Habit[] }) => {
  const { toggleExpand, animatedStyle } = useExpandAnimation(0, 130);
  return (
    <View
      style={{
        width: "100%",
        borderRadius: 15,
        borderColor: colors.gray200,
        borderWidth: 1,
        marginVertical: 30,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 7,
              backgroundColor: colors.gray100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography size={18}>👀</Typography>
          </View>
          <View>
            <Typography size={16} align="left" font="p-m">
              All Habits
            </Typography>
            <Typography size={13} color="gray400" align="left">
              Summary
            </Typography>
          </View>
        </View>
        <SmallButton icon={<ArrowDown />} action={toggleExpand} />
      </View>
      <Animated.View style={[{ overflow: "hidden" }, animatedStyle]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            gap: 40,
          }}
        >
          <View>
            <Typography
              color="gray400"
              align="left"
              font="p-m"
              styles={{ marginBottom: 5 }}
            >
              Success Rate
            </Typography>
            <View
              style={{
                backgroundColor: "#d1fadf",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                width: 50,
                borderRadius: 5,
                padding: 2,
              }}
            >
              <Typography color="success" font="p-sb">
                {getSuccessRate(habits)}
              </Typography>
            </View>
            <Typography
              color="gray400"
              align="left"
              font="p-m"
              styles={{ marginVertical: 5 }}
            >
              Awards Earned
            </Typography>
            <View
              style={{
                backgroundColor: "#fef0c7",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                width: 50,
                borderRadius: 5,
                padding: 2,
                gap: 2,
              }}
            >
              <Typography color="yellow" font="p-sb">
                9
              </Typography>
              <Badge />
            </View>
          </View>
          <View>
            <Typography
              color="gray400"
              align="left"
              font="p-m"
              styles={{ marginBottom: 5 }}
            >
              Completed
            </Typography>
            <View
              style={{
                backgroundColor: "#d1fadf",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                width: 50,
                borderRadius: 5,
                padding: 2,
                gap: 2,
              }}
            >
              <Typography color="success" font="p-sb">
                {getSuccessCount(habits)}
              </Typography>
              <Verified />
            </View>
            <Typography
              color="gray400"
              align="left"
              font="p-m"
              styles={{ marginVertical: 5 }}
            >
              Failed
            </Typography>
            <View
              style={{
                backgroundColor: "#fee4e2",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                width: 50,
                borderRadius: 5,
                padding: 2,
                gap: 2,
              }}
            >
              <Typography color="error" font="p-sb">
                {getFailedCount(habits)}
              </Typography>
              <Error />
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default HabitStatistic;
