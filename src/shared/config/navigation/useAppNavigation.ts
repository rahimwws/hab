import { ParamListBase, useNavigation, type NavigationProp } from '@react-navigation/native';

export const useAppNavigation = (): NavigationProp<ParamListBase> => {
  return useNavigation<NavigationProp<ParamListBase>>();
};