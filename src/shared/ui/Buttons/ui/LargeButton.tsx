import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Typography } from '../../Typography'
import colors from '@/src/shared/lib/theme/colors'
import { useAppNavigation } from '@/src/shared/config/navigation/useAppNavigation';
import { LightHeptic } from '@/src/shared/lib/heptics/LightHeptic';
const LargeButton = ({ text, isRoute, route = "", action = false, violet = true, heptic = true, disabled=false }:
    {
        text: string,
        isRoute?: boolean,
        route?: string
        action?: Function | false,
        violet?: boolean,
        heptic?: boolean,
        disabled?: boolean,
    }
) => {
    const navigation = useAppNavigation()
    const HandleClick = () => {
        isRoute && navigation.navigate(route)
        action && action()
        heptic && LightHeptic()
    }
    return (
        <TouchableOpacity style={{
            width: "100%",
            backgroundColor: violet ? colors.primary400 : "transparent",
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            opacity: disabled ? 0.5 : 1
        }}
            disabled={disabled}
            activeOpacity={0.7}
            onPress={HandleClick}
        >
            <Typography color={violet ? "white" : "primary900"} size={18} font="p-m">
                {text}
            </Typography>
        </TouchableOpacity>
    )
}

export default LargeButton