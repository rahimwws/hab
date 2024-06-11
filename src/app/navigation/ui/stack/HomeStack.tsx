import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/src/screens/service/Home';
import { Timer } from '@/src/screens/home-stack';

const HomeStack = () => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Timer" component={Timer} />
        </HomeStack.Navigator>
    )
}

export default HomeStack