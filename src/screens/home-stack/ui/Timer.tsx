import React from 'react'
import { ScreenContent } from '@/src/shared/ui/ScreenContent'
import { Back } from '@/src/shared/ui/Buttons'
import { RouteProp, useRoute } from '@react-navigation/native'
import { Card } from '@/src/entities/habit'
import { Habit } from '@/src/entities/habit/lib/types/habit'
export type HabitRouteParams = {
  HabitDetails: {
    card: Habit;
  };
};
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]); // later its need new solution
const Timer = () => {
  const route: RouteProp<HabitRouteParams> = useRoute()
  return (
    <ScreenContent styles={{
      gap: 50
    }}>
      <Back />
      <Card card={route.params?.card} />
    </ScreenContent>
  )
}

export default Timer