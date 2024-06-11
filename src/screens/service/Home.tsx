import { ActionSheetIOS, Button, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScreenContent } from '@/src/shared/ui/ScreenContent'
import { HomeHeader } from '@/src/entities/header'
import { TimeList } from '@/src/widget/time-list'
import { TodayHabits } from '@/src/widget/today-habits'
import { BottomCalendar } from '@/src/widget/bottom-calendar'
import { CounterSheet } from '@/src/entities/counter-sheet'
import { StatusHabits } from '@/src/widget/status-habits'

const Home = () => {
    return (
        <>
            <ScreenContent px={20}>
                <HomeHeader />
                <TimeList />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        marginBottom: 40
                    }}
                >
                    <TodayHabits />
                    <StatusHabits />
                    <CounterSheet />
                </ScrollView>
            </ScreenContent>
            <BottomCalendar />
        </>

    )
}

export default Home