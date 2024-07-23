import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Introduction from "./Introduction";
import { getToken } from "@/shared/api/token/storage";
import StackScreens from "../stack/StackScreens";

const Main = () => {
  const Stack = createStackNavigator();
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (token) {
        setInitialRoute("Screens");
      } else {
        setInitialRoute("Introduction");
      }
    };

    checkToken();
  }, []);

  if (initialRoute === null) return null;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRoute}
    >
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="Screens" component={StackScreens} />
    </Stack.Navigator>
  );
};

export default Main;
