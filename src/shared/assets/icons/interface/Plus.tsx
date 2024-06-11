import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'
import colors from '@/src/shared/lib/theme/colors'

const Plus = ({ size = 20,color=colors.black }: {
    size?: number,
    color?:string
}) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
            <Path d="M12 4V12M12 12V20M12 12H20M12 12H4" stroke={color} strokeWidth="2" stroke-linecap="round" />
        </Svg>
    )
}

export default Plus