import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Typography } from '@/src/shared/ui/Typography'
import colors from '@/src/shared/lib/theme/colors'

const CalendarItem = ({
    day,
    number,
    active,
    action
}: {
    day: string,
    number: number,
    active: boolean,
    action: () => void
}) => {
    return (
        <TouchableOpacity style={{
            width: 50,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: active ? colors.primary400 : colors.gray200,
            backgroundColor: colors.white,
            gap: 5,
            // paddingHorizontal:10
            paddingVertical: 7,
            borderRadius: 10,
        }}
            onPress={action}
        >
            <Typography size={14} styles={{ textTransform: "uppercase" }} color={active ? "primary400" : "gray200"} font='p-sb'>{day}</Typography>
            <Typography size={14} styles={{ textTransform: "uppercase" }} color={active ? "primary400" : "gray200"} font='p-sb'>{number}</Typography>
        </TouchableOpacity>
    )
}

export default CalendarItem