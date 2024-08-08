import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { generateMonthsArray } from "../lib/months";
import Month from "./Month";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import ratio from "@/shared/lib/theme/ratio";
import colors from "@/shared/lib/theme/colors";
import { ArrowRight } from "@/shared/assets";
import { TrackingProgress } from "@/features/tracking";
import { completeDays } from "@/entities/habit/model/types";
const Tracking = ({
  startDate,
  endDate,
  completedDays,
}: {
  startDate: Date;
  endDate: Date;
  completedDays: completeDays[];
}) => {
  const monthsArray = generateMonthsArray();
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date(endDate).getMonth()
  );
  const index = new Date(endDate).getMonth();
  const ref = React.useRef<ICarouselInstance>(null);
  const swipe = ({ direction }: { direction: "right" | "left" }) => {
    if (direction === "right") {
      ref.current?.scrollTo({ count: +1, animated: true });
      setCurrentMonthIndex(currentMonthIndex + 1);
    } else {
      ref.current?.scrollTo({ count: -1, animated: true });
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: colors.primary50,
        paddingHorizontal: 10,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginTop: 10,
          backgroundColor: colors.white,
          height: 50,
          borderRadius: 10,
        }}
      >
        <Carousel
          defaultIndex={index}
          ref={ref}
          width={ratio.width - 70}
          height={100}
          data={monthsArray}
          renderItem={({ item }) => <Month month={item} />}
          onScrollEnd={(index) => setCurrentMonthIndex(index)}
        />
        <TouchableOpacity
          style={{ right: 10, position: "absolute", top: 10 }}
          onPress={() => swipe({ direction: "right" })}
        >
          <ArrowRight size={30} color={colors.primary400} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ left: 10, position: "absolute", top: 10 }}
          onPress={() => swipe({ direction: "left" })}
        >
          <ArrowRight size={30} color={colors.primary400} right={false} />
        </TouchableOpacity>
      </View>
      <TrackingProgress
        completedDays={completedDays}
        startDate={startDate}
        endDate={endDate}
        month={currentMonthIndex}
      />
    </View>
  );
};

export default Tracking;
