import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Service from "./Service";
import {
  Code,
  Email,
  Password,
  LogIn,
  Onboarding,
  Username,
} from "@/screens/auth";
import { Calendar, Timer } from "@/screens";
import { FriendDetail } from "@/screens/friends-stack";
import { getToken } from "@/shared/api/token/storage";
const Introduction = () => {
  const IntroductionStack = createStackNavigator();
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (token) {
        setInitialRoute("Service");
      } else {
        setInitialRoute("Onboarding");
      }
    };

    checkToken();
  }, []);

  if (initialRoute === null) return null;
  return (
    <IntroductionStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRoute}
    >
      <IntroductionStack.Screen name="Onboarding" component={Onboarding} />
      <IntroductionStack.Screen name="SignUp" component={Email} />
      <IntroductionStack.Screen name="Username" component={Username} />
      <IntroductionStack.Screen name="Password" component={Password} />
      <IntroductionStack.Screen
        name="Service"
        component={Service}
        options={{
          gestureEnabled: false,
        }}
      />
      <IntroductionStack.Screen name="CodeOpt" component={Code} />
      <IntroductionStack.Screen name="LogIn" component={LogIn} />
      <IntroductionStack.Screen name="Timer" component={Timer} />
      <IntroductionStack.Screen name="Calendar" component={Calendar} />
      <IntroductionStack.Screen name="FriendDetail" component={FriendDetail} />
    </IntroductionStack.Navigator>
  );
};

export default Introduction;
