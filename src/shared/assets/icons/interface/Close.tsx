import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Close = ({ size = 20 }: {
    size?: number
}) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
            <Path d="M4.5 4.5L13.5 13.5M4.5 13.5L13.5 4.5" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}

export default Close