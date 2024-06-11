import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'
import colors from '@/src/shared/lib/theme/colors'

const Award = ({ color=colors.gray400 }: { color?: string }) => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M10.125 13.75V15.5" stroke={color} strokeWidth="1.3" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5.95825 18.3333H14.2916V17.4999C14.2916 16.5833 13.5416 15.8333 12.6249 15.8333H7.62492C6.70825 15.8333 5.95825 16.5833 5.95825 17.4999V18.3333V18.3333Z" stroke={color} strokeWidth="1.3" stroke-miterlimit="10" />
            <Path d="M5.125 18.3333H15.125" stroke={color} strokeWidth="1.3" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M10.0001 13.3334C6.77508 13.3334 4.16675 10.7251 4.16675 7.50008V5.00008C4.16675 3.15841 5.65841 1.66675 7.50008 1.66675H12.5001C14.3417 1.66675 15.8334 3.15841 15.8334 5.00008V7.50008C15.8334 10.7251 13.2251 13.3334 10.0001 13.3334Z" stroke={color} strokeWidth="1.3" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M4.55828 9.70833C3.93328 9.50833 3.38328 9.14167 2.94995 8.70833C2.19995 7.875 1.69995 6.875 1.69995 5.70833C1.69995 4.54167 2.61662 3.625 3.78328 3.625H4.32495C4.15828 4.00833 4.07495 4.43333 4.07495 4.875V7.375C4.07495 8.20833 4.24995 8.99167 4.55828 9.70833Z" stroke={color} strokeWidth="1.3" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M15.4417 9.70833C16.0667 9.50833 16.6166 9.14167 17.05 8.70833C17.8 7.875 18.3 6.875 18.3 5.70833C18.3 4.54167 17.3833 3.625 16.2166 3.625H15.675C15.8416 4.00833 15.925 4.43333 15.925 4.875V7.375C15.925 8.20833 15.75 8.99167 15.4417 9.70833Z" stroke={color} strokeWidth="1.3" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}

export default Award