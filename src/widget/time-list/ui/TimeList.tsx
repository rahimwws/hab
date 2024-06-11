import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TimeItem from './TimeItem'
import { LightHeptic } from '@/src/shared/lib/heptics/LightHeptic';

const TimeList = () => {
    const [activeType, setActiveType] = useState<string>('All');

    const times = ['All', 'Morning', 'Afternoon', 'Evening'];
    return (
        <View style={{
            flexDirection: "row"
        }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 10
                }}

            >
                {times.map((time: string) => (
                    <TouchableOpacity key={time} onPress={() => {
                        LightHeptic()
                        setActiveType(time)
                    }} >
                        <TimeItem active={activeType === time} type={time as "Morning" | "Afternoon" | "Evening"} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default TimeList