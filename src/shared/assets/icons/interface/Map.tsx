import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Map = ({color}:{color:string}) => {
    return (
        <Svg width="29" height="28" viewBox="0 0 29 28" fill="none" >
            <Path d="M18 7V24.5M18 7L25 3.5V21L18 24.5M18 7L11 3.5M18 24.5L11 21M11 21L4 24.5V7L11 3.5M11 21V3.5" stroke={color} strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}

export default Map