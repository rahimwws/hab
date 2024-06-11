import { View, Text } from 'react-native'
import React from 'react'
import { ScreenContent } from '@/src/shared/ui/ScreenContent'
import { Typography } from '@/src/shared/ui/Typography'
import List from '@/src/shared/ui/OnBoarding/List'
import { LargeButton } from '@/src/shared/ui/Buttons'

const Onboarding = () => {
    return (
        <ScreenContent styles={{
            alignItems: "center"
        }}
            showPx={false}
        >
            <Typography size={28} font='p-sb' >
                Habits
            </Typography>
            <List />
            <View style={{
                width: "100%",
                alignSelf: "flex-end",
                paddingHorizontal: 20,
                gap: 20,
                marginBottom: 10
            }}>
                <LargeButton text='Sign Up' isRoute={true} route='SignUp' />
                <LargeButton text='Log In' violet={false} isRoute={true} route='LogIn' />
            </View>
        </ScreenContent>
    )
}

export default Onboarding