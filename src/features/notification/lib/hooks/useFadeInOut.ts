import { useEffect } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming, withDelay, runOnJS } from 'react-native-reanimated';

type UseFadeInOutProps = {
  duration?: number;
  delay?: number;
  onFinish?: () => void;
};

const useFadeInOut = ({ duration = 500, delay = 2000, onFinish }: UseFadeInOutProps) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(10);

  useEffect(() => {
    // Animation to show the component
    opacity.value = withTiming(1, { duration });
    translateY.value = withTiming(0, { duration });

    // Animation to hide the component after delay
    const timer = setTimeout(() => {
      opacity.value = withDelay(delay, withTiming(0, { duration }, () => {
        if (onFinish) {
          runOnJS(onFinish)();
        }
      }));
      translateY.value = withDelay(delay, withTiming(10, { duration }));
    }, delay);

    return () => clearTimeout(timer);
  }, [duration, delay, onFinish, opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return animatedStyle;
};

export default useFadeInOut;
