import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const useAnimatedCircle = () => {
  const animatedValue = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedValue.value,
      transform: [{ scale: animatedValue.value }],
    };
  });

  const startAnimation = () => {
    animatedValue.value = withTiming(
      0,
      { duration: 150, easing: Easing.inOut(Easing.ease) },
      () => {
        animatedValue.value = withTiming(1, {
          duration: 200,
          easing: Easing.inOut(Easing.ease),
        });
      }
    );
  };

  return { animatedStyle, startAnimation };
};
