import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ArrowLeft from '@/src/shared/assets/icons/interface/ArrowLeft'
import colors from '@/src/shared/lib/theme/colors'
import { useAppNavigation } from '@/src/shared/config/navigation'
import { LightHeptic } from '@/src/shared/lib/heptics/LightHeptic'
import ratio from '@/src/shared/lib/theme/ratio'

const Back = ({ back = true, route = "",  }:
    {
        back?: boolean,
        route?: string,

    }
) => {
    const navigation = useAppNavigation()
    const HandlePress = () => {
        LightHeptic()
        back ? navigation.goBack() : navigation.navigate(route)
    }
    return (
        <View style={{
            backgroundColor: "red",
            zIndex: 1,
            width: ratio.width

        }}>

            <TouchableOpacity style={{
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: 40,
                borderWidth: 1,
                borderColor: colors.gray200,
                zIndex: 1
            }}
                onPress={HandlePress}
            >
                <ArrowLeft size={20} />
            </TouchableOpacity>
        </View>

    )
}

export default Back