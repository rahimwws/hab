import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const useExpandAnimation = (initialHeight = 0, expandedHeight = 130) => {
  const [expanded, setExpanded] = useState(false);
  const height = useSharedValue(initialHeight);

  const toggleExpand = () => {
    setExpanded(!expanded);
    height.value = expanded ? initialHeight : expandedHeight;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, { duration: 300 }),
    };
  });

  return {
    toggleExpand,
    animatedStyle,
    expanded,
  };
};
