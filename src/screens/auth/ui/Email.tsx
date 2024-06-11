import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { ScreenContent } from '@/src/shared/ui/ScreenContent'
import { Typography } from '@/src/shared/ui/Typography'
import { Back, LargeButton } from '@/src/shared/ui/Buttons'
import ratio from '@/src/shared/lib/theme/ratio'
import { Register } from '@/src/features/auth'

const Email = () => {
    return (
        <ScreenContent>
            <Back />
            <KeyboardAvoidingView
                behavior="padding"
                style={{ flex: 1 }}
            >
                <View style={{
                    flex: 1,
                    marginTop: ratio.width * 0.15
                }}>
                    <Typography align="left" size={22} font='p-b'>Let’s Get Started</Typography>
                    <Typography align="left" font='p-r' color="gray400">Create your Habit account</Typography>
                    <Register />
                    <View style={{
                        alignSelf: "flex-end",
                        marginTop: "auto",
                        width: "100%",
                        marginBottom:10
                    }}>
                        <LargeButton text='Continue' isRoute={true} route='Password' />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScreenContent>

    )
}

export default Email