import { View } from 'react-native'
import React from 'react'
import { Typography } from '@/src/shared/ui/Typography'
import colors from '@/src/shared/lib/theme/colors'
import { Card } from '@/src/entities/habit'
import { useHabitStore } from '@/src/entities/habit/lib/state/HabitStore'
import today from '../model/today'

const TodayHabits = () => {

    const { habits } = useHabitStore()
    const todayHabits = today({ habits: habits })
    return (
        <View style={{
            marginTop: 10,
            marginBottom: -10
        }}
        >
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 10
            }}>
                <Typography align='left' font='p-sb' size={20}>Today</Typography>
                <View style={{
                    height: 25,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colors.primary900,
                    paddingHorizontal: 10,
                }}>
                    <Typography color="white" font='p-m'>2/{todayHabits.length}</Typography>
                </View>
            </View>
            <View
                style={{
                    gap: 10
                }}
            >
                {todayHabits
                    .map((item, index) => {
                        return <Card card={item} key={index} />
                    })}
            </View>

        </View>
    )
}

export default TodayHabits