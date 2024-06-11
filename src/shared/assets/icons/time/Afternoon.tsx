import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Afternoon = ({ color }: {
    color: string
}) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M18.5 12C18.5 8.41 15.59 5.5 12 5.5C8.41 5.5 5.5 8.41 5.5 12M19.01 4.98999L19.14 4.85999M12 2.07999V2M2.08002 12H2M22 12H21.92M4.98999 4.98999L4.85999 4.85999M4 15H20M6 18H18M9 21H15" stroke={color} strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}

export default Afternoon