import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Service from './Service';
import { Code, Email, Password, LogIn, Onboarding } from '@/src/screens/auth';
const Introduction = () => {
    const IntroductionStack = createStackNavigator();

    return (
        <IntroductionStack.Navigator screenOptions={{
            headerShown: false
        }}
        initialRouteName='Service'
        >
            <IntroductionStack.Screen name="Onboarding" component={Onboarding} />
            <IntroductionStack.Screen name="SignUp" component={Email} />
            <IntroductionStack.Screen name="Password" component={Password} />
            <IntroductionStack.Screen name="Service" component={Service} options={{
                gestureEnabled: false
            }} />
            <IntroductionStack.Screen name="CodeOpt" component={Code} />
            <IntroductionStack.Screen name="LogIn" component={LogIn} />
        </IntroductionStack.Navigator>
    )
}

export default Introduction