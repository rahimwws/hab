import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Timer = ({ size = 20 }: {
    size?: number
}) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
            <Path d="M9 9.75V6.75M15.75 4.5L14.25 3M7.5 1.5H10.5M9 15.75C5.68629 15.75 3 13.0637 3 9.75C3 6.43629 5.68629 3.75 9 3.75C12.3137 3.75 15 6.43629 15 9.75C15 13.0637 12.3137 15.75 9 15.75Z" stroke="#101828" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}

export default Timer