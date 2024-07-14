import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import ratio from "@/shared/lib/theme/ratio";
import colors from "@/shared/lib/theme/colors";
import { BlurView } from "expo-blur";
import CalendarItem from "./CalendarItem";
import days from "../config/days";
import { Plus } from "@/shared/assets";
import todayDay from "../config/todayDay";
import { scrollToIndex } from "../model/scrollToIndex";
import { formatDateSheet } from "@/features/calendar/model/format/formatDate";
import { useTodayDay } from "../../today-habits/lib/todayState";

const BottomCalendar = () => {
  const createDateFromDay = (day: number) => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), day);
  };
  const flatListRef = useRef<FlatList>(null);
  const [number, setNumber] = useState(todayDay());

  const { changeDate } = useTodayDay();

  useEffect(() => {
    setTimeout(() => scrollToIndex(number, flatListRef, days), 500);
  }, []);
  return (
    <BlurView
      intensity={50}
      style={{
        width: ratio.width,
        position: "absolute",
        bottom: 0,
        paddingVertical: 5,
        // height: 70
      }}
      tint="systemChromeMaterialLight"
      experimentalBlurMethod="dimezisBlurView"
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: 10,
          paddingRight: 10,
          paddingLeft: 10,
        }}
      >
        <FlatList
          ref={flatListRef}
          data={days}
          renderItem={({ item }) => {
            return (
              <CalendarItem
                day={item.day}
                number={item.number}
                active={item.number === number}
                action={() => {
                  setNumber(item.number);
                  changeDate(createDateFromDay(item.number));
                }}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 5,
            paddingLeft: 10,
            paddingRight: 5,
          }}
        />
        <View
          style={{
            width: 1.5,
            height: 30,
            backgroundColor: colors.gray200,
            borderRadius: 10,
          }}
        ></View>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: colors.primary400,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Plus color={colors.white} size={25} />
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

export default BottomCalendar;
