import { View, Text } from "react-native";
import React from "react";
import colors from "@/shared/lib/theme/colors";
import { useAnimatedStyle } from "react-native-reanimated";

const TrackingBox = ({
  completed,
  free = false,
}: {
  completed: boolean;
  free?: boolean;
}) => {
  return (
    <View
      style={{
        width: 25,
        height: 25,
        borderRadius: 5,
        backgroundColor: free
          ? "transparent"
          : completed
          ? "#a0a4ff"
          : colors.primary100,
        borderWidth: free ? 1 : 0,
        borderColor: "#a0a4ff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {free && (
        <>
          <View
            style={{
              width: 2,
              height: 8,
              position: "absolute",
              left: 6,
              top: 12,
              backgroundColor: "#a0a4ff",
              opacity: 0.8,
              transform: [{ skewX: "40deg" }],
            }}
          ></View>
          <View
            style={{
              width: 2,
              height: 8,
              position: "absolute",
              right: 6,
              bottom: 12,
              backgroundColor: "#a0a4ff",
              opacity: 0.8,
              transform: [{ skewX: "40deg" }],
            }}
          ></View>
          <View
            style={{
              width: 2,
              height: 12,
              position: "absolute",
              backgroundColor: "#a0a4ff",
              opacity: 0.8,
              transform: [{ skewX: "40deg" }],
            }}
          ></View>
        </>
      )}
    </View>
  );
};

export default TrackingBox;
