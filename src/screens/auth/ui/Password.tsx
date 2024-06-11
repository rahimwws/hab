import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { ScreenContent } from '@/src/shared/ui/ScreenContent'
import { Back, LargeButton } from '@/src/shared/ui/Buttons'
import ratio from '@/src/shared/lib/theme/ratio'
import { Typography } from '@/src/shared/ui/Typography'
import { CreatePassword, Register } from '@/src/features/auth'

const Password = () => {
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
                    <Typography align="left" size={22} font='p-b'>Create a password</Typography>
                    <Typography align="left" font='p-r' color="gray400">Choose a strong password to secure your Habit account</Typography>
                    <CreatePassword />
                    <View style={{
                        alignSelf: "flex-end",
                        marginTop: "auto",
                        width: "100%",
                        marginBottom: 10
                    }}>
                        <LargeButton text='Continue' isRoute={true} route='CodeOpt' />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScreenContent>
    )
}

export default Password