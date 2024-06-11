import { View, Text } from 'react-native'
import React from 'react'
import { useHabitStore } from '@/src/entities/habit/lib/state/HabitStore'
import { Typography } from '@/src/shared/ui/Typography'
import StatusSection from './StatusSection'

const StatusHabits = () => {
    const { habits } = useHabitStore()
    const statusSections = [
        { title: 'In Progress', color: 'gray400', status: 'default' },
        { title: 'Success', color: 'success', status: 'Success' },
        { title: 'Failed', color: 'error', status: 'Skipped' },
    ];
    return (
        <View style={{ marginTop: 10 }}>
            <Typography align='left' font='p-sb' size={20} styles={{ marginVertical: 10 }}>
                Status
            </Typography>
            {statusSections.map((section, index) => (
                <StatusSection
                    key={index}
                    title={section.title}
                    color={section.color as "gray400" | "success" | "error"}
                    status={section.status}
                    habits={habits}
                />
            ))}
        </View>
    )
}

export default StatusHabits