import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Animated,
} from "react-native";
import React from "react";
import colors from "@/shared/lib/theme/colors";

const Pagination = ({ data, scrollX }: any) => {
  const { width }: any = useWindowDimensions();
  return (
    <View style={{ flexDirection: "row", height: 10, marginBottom: 10 }}>
      {data.map((item: any, key: number) => {
        const inputRange = [(key - 1) * width, key * width, (key + 1) * width];

        const dotsWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 40, 8],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotsWidth, opacity }]}
            key={key}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  dot: {
    height: 8,
    borderRadius: 5,
    backgroundColor: colors.primary400,
    marginHorizontal: 8,
  },
});
