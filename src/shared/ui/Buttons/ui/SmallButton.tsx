import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '@/src/shared/lib/theme/colors'
import { LightHeptic } from '@/src/shared/lib/heptics/LightHeptic'

const SmallButton = ({ icon, action }: {
    icon: React.ReactNode,
    action?: Function
}) => {
    const HandleClick = () => {
        LightHeptic()
        action && action()
    }
    return (
        <TouchableOpacity style={{
            width: 45,
            height: 45,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: colors.gray200,
        }}
            onPress={HandleClick}
        >
            {icon}
        </TouchableOpacity>
    )
}

export default SmallButton