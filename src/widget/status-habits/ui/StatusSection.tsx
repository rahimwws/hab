import { View, Text } from 'react-native'
import React from 'react'
import { Typography } from '@/src/shared/ui/Typography';
import { Habit } from '@/src/entities/habit/lib/types/habit';
import { Card } from '@/src/entities/habit';
import colors from '@/src/shared/lib/theme/colors';

const StatusSection = ({ title, color, status, habits }: {
    title: string, color: keyof typeof colors, status: string, habits: Habit[]
}) => (
    <>
        <Typography align='left' font='p-m' color={color} styles={{ marginVertical: 5 }}>
            {title}
        </Typography>
        <View style={{ gap: 10 }}>
            {habits
                .filter(habit => habit.status === status)
                .map((habit, index) => (
                    <Card card={habit} key={index} />
                ))
            }
        </View>
    </>
);

export default StatusSection