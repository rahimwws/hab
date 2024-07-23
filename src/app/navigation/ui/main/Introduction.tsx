import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Code,
  Email,
  Password,
  LogIn,
  Onboarding,
  Username,
} from "@/screens/auth";
const Introduction = () => {
  const IntroductionStack = createStackNavigator();
  return (
    <IntroductionStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Onboarding"}
    >
      <IntroductionStack.Screen name="Onboarding" component={Onboarding} />
      <IntroductionStack.Screen name="SignUp" component={Email} />
      <IntroductionStack.Screen name="Username" component={Username} />
      <IntroductionStack.Screen name="Password" component={Password} />
      <IntroductionStack.Screen name="CodeOpt" component={Code} />
      <IntroductionStack.Screen name="LogIn" component={LogIn} />
    </IntroductionStack.Navigator>
  );
};

export default Introduction;
