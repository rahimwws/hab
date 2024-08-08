import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Calendar, Edit, HabitDetail, Home, Timer } from "@/screens";
import Service from "../main/Service";
import { AddFriend, FriendDetail, Requests } from "@/screens/friends-stack";

const StackScreens = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="Service" component={Service} />
      <stack.Screen name="Calendar" component={Calendar} />
      <stack.Screen name="FriendDetail" component={FriendDetail} />
      <stack.Screen name="AddFriend" component={AddFriend} />
      <stack.Screen name="Requests" component={Requests} />
      <stack.Screen name="Timer" component={Timer} />
      <stack.Screen name="CreateHabit" component={Edit} />
      <stack.Screen name="HabitDetail" component={HabitDetail} />
      <stack.Screen name="Edit" component={Edit} />
    </stack.Navigator>
  );
};

export default StackScreens;
