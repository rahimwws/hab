import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const UserIcon = ({color}:{color:string}) => {
    return (
        <Svg width="29" height="28" viewBox="0 0 29 28" fill="none" >
            <Path d="M23.8334 24.5C23.8334 21.2783 19.6547 18.6667 14.5001 18.6667C9.34542 18.6667 5.16675 21.2783 5.16675 24.5M14.5001 15.1667C11.2784 15.1667 8.66675 12.555 8.66675 9.33333C8.66675 6.11167 11.2784 3.5 14.5001 3.5C17.7217 3.5 20.3334 6.11167 20.3334 9.33333C20.3334 12.555 17.7217 15.1667 14.5001 15.1667Z" stroke={color} strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}

export default UserIcon