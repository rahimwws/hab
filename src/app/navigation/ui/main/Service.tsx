import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "@/shared/lib/theme/colors";
import { HomeIcon, Map, UserIcon, UsersIcon } from "@/shared/assets";
import { Platform } from "react-native";
import { Friends, Home, Journey } from "@/screens";
const ServiceTab = createBottomTabNavigator();
const Service = () => {
  return (
    <ServiceTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "p-r",
        },
        tabBarActiveTintColor: colors.primary400,
        tabBarInactiveTintColor: colors.gray400,
        tabBarStyle: {
          height: Platform.OS === "android" ? 65 : 85,
          paddingTop: 10,
        },
      }}
    >
      <ServiceTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => {
            return <HomeIcon color={color} />;
          },
        }}
      />
      <ServiceTab.Screen
        name="Journey"
        component={Journey}
        options={{
          tabBarIcon: ({ color }) => {
            return <Map color={color} />;
          },
        }}
      />
      <ServiceTab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarIcon: ({ color }) => {
            return <UsersIcon color={color} />;
          },
        }}
      />
      <ServiceTab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <UserIcon color={color} />;
          },
        }}
      />
    </ServiceTab.Navigator>
  );
};

export default Service;
