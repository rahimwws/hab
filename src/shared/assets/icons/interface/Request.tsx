import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Request = ({ size }: {
    size: number
}) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
            <Path d="M15.8333 6.66675C17.214 6.66675 18.3333 5.54746 18.3333 4.16675C18.3333 2.78604 17.214 1.66675 15.8333 1.66675C14.4525 1.66675 13.3333 2.78604 13.3333 4.16675C13.3333 5.54746 14.4525 6.66675 15.8333 6.66675Z" fill="#F04438" stroke="#F04438" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5.83325 10.8333H9.99992" stroke="#22184E" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5.83325 14.1667H13.3333" stroke="#22184E" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M11.6667 1.66675H7.50008C3.33341 1.66675 1.66675 3.33341 1.66675 7.50008V12.5001C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5001V8.33342" stroke="#22184E" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}

export default Request