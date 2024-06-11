import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/src/screens/service/Home';
import colors from '@/src/shared/lib/theme/colors';
import { HomeIcon, Map, UserIcon, UsersIcon } from '@/src/shared/assets';
import { Platform } from 'react-native';
import HomeStack from '../stack/HomeStack';
const ServiceTab = createBottomTabNavigator();
const Service = () => {
    return (
        <ServiceTab.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
                fontFamily: "p-r",
            },
            tabBarActiveTintColor: colors.primary400,
            tabBarInactiveTintColor: colors.gray400,
            tabBarStyle: {
                height: Platform.OS === "android" ? 65 : 85,
                paddingTop: 10,
            }
        }}>
            <ServiceTab.Screen name="HomeStack" component={HomeStack} options={{
                title:"Home",
                tabBarIcon: ({ color }) => {
                    return <HomeIcon color={color} />
                }
            }} />
            <ServiceTab.Screen name="Journey" component={Home} options={{
                tabBarIcon: ({ color }) => {
                    return <Map color={color} />
                }
            }} />
            <ServiceTab.Screen name="Friends" component={Home} options={{
                tabBarIcon: ({ color }) => {
                    return <UsersIcon color={color} />
                }
            }} />
            <ServiceTab.Screen name="Profile" component={Home} options={{
                tabBarIcon: ({ color }) => {
                    return <UserIcon color={color} />
                }
            }} />
        </ServiceTab.Navigator>
    )
}

export default Service