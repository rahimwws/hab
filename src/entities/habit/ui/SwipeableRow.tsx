import React, { useRef, PropsWithChildren } from 'react';
import { Animated, StyleSheet, View, I18nManager, TouchableOpacity } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import colors from '@/src/shared/lib/theme/colors';
import { Complete, Fail, Filter } from '@/src/shared/assets';

type Props = {
  children: React.ReactNode;
  onDelete: any;
  onArchive: any; // Добавил новую функцию для левого свайпа
};

const SwipeableRow: React.FC<Props> = ({ children, onDelete, onArchive }) => {
  const swipeableRowRef = useRef<Swipeable>(null);

  const renderAction = (
    index: number,
    text: string,
    color: string,
    x: number,
    progress: Animated.AnimatedInterpolation<number>,
    icon?: React.ReactNode,
    onPress?: () => void // Добавил функцию onPress
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <TouchableOpacity
          style={[styles.action, {
            backgroundColor: color,
            borderTopLeftRadius: index === 1 ? 15 : 0,
            borderBottomLeftRadius: index === 1 ? 15 : 0,
            borderTopRightRadius: index !== 1 ? 15 : 0,
            borderBottomRightRadius: index !== 1 ? 15 : 0,
          }]}
          onPress={()=>{
            swipeableRowRef.current?.close()
            onPress && onPress()
          }}
        >
          {icon}
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    _dragAnimatedValue: Animated.AnimatedInterpolation<number>
  ) => (
    <View
      style={{
        width: 90,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        marginLeft: -10,
        zIndex: 1,
      }}
    >
      {renderAction(2, 'Fail', `${colors.error}`, 50, progress, <Fail size={25} color={colors.white} />, onDelete)}
    </View>
  );

  const renderLeftActions = (
    progress: Animated.AnimatedInterpolation<number>,
    _dragAnimatedValue: Animated.AnimatedInterpolation<number>
  ) => (
    <View
      style={{
        width: 90,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        marginRight: -10,
        zIndex: 1,
      }}
    >
      {renderAction(1, 'Archive', `${colors.success}`, -50, progress, <Complete size={25} color={colors.white} />, onArchive)}
    </View>
  );

  return (
    <Swipeable
      ref={swipeableRowRef}
      friction={4}
      enableTrackpadTwoFingerGesture
      rightThreshold={10}
      leftThreshold={10}
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      {children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  action: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
});

export default SwipeableRow;
