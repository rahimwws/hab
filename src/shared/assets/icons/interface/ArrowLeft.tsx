import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'
import colors from '../../../lib/theme/colors'

const ArrowLeft = ({ size, color = colors.black }: { size: number, color?: string }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
            <Path d="M7.97508 4.94168L2.91675 10L7.97508 15.0583" stroke={color} strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M17.0834 10H3.05835" stroke={color} strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}

export default ArrowLeft