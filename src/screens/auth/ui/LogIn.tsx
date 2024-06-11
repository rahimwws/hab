import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { ScreenContent } from '@/src/shared/ui/ScreenContent'
import { Back } from '@/src/shared/ui/Buttons'
import ratio from '@/src/shared/lib/theme/ratio'
import { Typography } from '@/src/shared/ui/Typography'
import { LoginAccount, Register } from '@/src/features/auth'

const LogIn = () => {
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
                    <Typography align="left" size={22} font='p-b'>Wow!,you have account</Typography>
                    <Typography align="left" font='p-r' color="gray400">Log In to your Habit account</Typography>
                    <LoginAccount />
                </View>
            </KeyboardAvoidingView>
        </ScreenContent>
    )
}

export default LogIn