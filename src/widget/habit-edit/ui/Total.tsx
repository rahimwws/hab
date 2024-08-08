import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "@/shared/lib/theme/colors";
import { Typography } from "@/shared/ui/Typography";
import { ArrowDown, ArrowRight, Minus, Plus, Todo } from "@/shared/assets";
import { useExpandAnimation } from "@/entities/statistics/lib/animation";
import Animated from "react-native-reanimated";
import { measures } from "../lib/data";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Habit } from "@/entities/habit/model/types";
import useEditHabitStore from "../../../features/management/lib/state/editStore";

const Total = ({ habit }: { habit: Habit | null }) => {
  const { total, setTotal, measure, setMeasure } = useEditHabitStore(
    (store) => {
      return {
        total: store.habit.total,
        setTotal: store.setTotal,
        measure: store.habit.measure,
        setMeasure: store.setMeasure,
      };
    }
  );
  const { animatedStyle, toggleExpand } = useExpandAnimation(0, 130);
  const ref = React.useRef<ICarouselInstance>(null);
  const swipe = ({ direction }: { direction: "right" | "left" }) => {
    if (direction === "right") {
      ref.current?.scrollTo({ count: +1, animated: true });
    } else {
      ref.current?.scrollTo({ count: -1, animated: true });
    }
  };
  useEffect(() => {
    if (habit) {
      setTotal(habit.total);
      setMeasure(habit.measure);
    }
  }, [habit]);
  return (
    <View
      style={{
        backgroundColor: colors.primary50,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          backgroundColor: colors.primary50,
          padding: 10,
          borderRadius: 10,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Todo position={false} />
          <Typography align="left" font="p-m">
            Total
          </Typography>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Typography align="left" font="p-m">
            {total} {measure}
          </Typography>
          <TouchableOpacity onPress={toggleExpand}>
            <ArrowDown />
          </TouchableOpacity>
        </View>
      </View>
      <Animated.View
        style={[
          {
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
          },
          animatedStyle,
        ]}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: colors.primary400,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setTotal(total - 1)}
          >
            <Minus color={colors.white} />
          </TouchableOpacity>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: colors.gray200,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography font="p-m" size={18}>
              {total}
            </Typography>
          </View>

          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: colors.primary400,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setTotal(total + 1)}
          >
            <Plus color={colors.white} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            width: 200,
            alignItems: "center",
            justifyContent: "center",
            height: 30,
          }}
        >
          <Carousel
            style={{
              height: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
            ref={ref}
            width={100}
            data={measures}
            renderItem={({ item }) => <Typography>{item}</Typography>}
            onScrollEnd={(index) => {
              setMeasure(measures[index]);
            }}
          />
          <TouchableOpacity
            style={{ right: 10, position: "absolute", top: -2 }}
            onPress={() => swipe({ direction: "right" })}
          >
            <ArrowRight size={30} color={colors.primary400} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ left: 10, position: "absolute", top: -2 }}
            onPress={() => swipe({ direction: "left" })}
          >
            <ArrowRight size={30} color={colors.primary400} right={false} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default Total;
