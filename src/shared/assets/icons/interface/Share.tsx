import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Share = ({ size = 25 }: {
    size?: number
}) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
            <Path d="M12 8V2L10 4" stroke="#22184E" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M12 2L14 4" stroke="#22184E" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z" stroke="#22184E" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5 12V10C5 7.99004 5 6.33004 8 6.04004" stroke="#22184E" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M19 12V10C19 7.99004 19 6.33004 16 6.04004" stroke="#22184E" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}

export default Share