import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Danger = ({ size }: { size: number }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
            <Path d="M10 7.5V11.6667" stroke="#912018" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M9.99986 17.8417H4.94986C2.0582 17.8417 0.849863 15.775 2.24986 13.25L4.84986 8.56671L7.29986 4.16671C8.7832 1.49171 11.2165 1.49171 12.6999 4.16671L15.1499 8.57504L17.7499 13.2584C19.1499 15.7834 17.9332 17.85 15.0499 17.85H9.99986V17.8417Z" stroke="#912018" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M9.99561 14.1667H10.0031" stroke="#912018" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export default Danger