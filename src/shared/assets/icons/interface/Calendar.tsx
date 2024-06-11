import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Calendar = ({ size, color }: {
    size: number,
    color: string
}) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
            <Path d="M6.66667 1.66663V4.16663M13.3333 1.66663V4.16663M6.66667 9.16663H13.3333M6.66667 13.3333H13.3333M17.5 7.08329V14.1666C17.5 16.6666 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6666 2.5 14.1666V7.08329C2.5 4.58329 3.75 2.91663 6.66667 2.91663H13.3333C16.25 2.91663 17.5 4.58329 17.5 7.08329Z" stroke={color} strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}

export default Calendar