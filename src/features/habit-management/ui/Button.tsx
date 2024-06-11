import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Complete, Fail, Plus, Timer } from '@/src/shared/assets'
import colors from '@/src/shared/lib/theme/colors'
import { useAppNavigation } from '@/src/shared/config/navigation'
import { Habit } from '@/src/entities/habit/lib/types/habit'
import { useCounterState } from '@/src/entities/counter-sheet/lib/state/counterState'

const Button = ({ status = "default", type = "default", card }: {
    status?: "Success" | "Skipped" | "default",
    type?: "timer" | "counter" | "default",
    card: Habit
}) => {
    const navigation = useAppNavigation()
    const { addHabit } = useCounterState()
    const action = () => {
        if (type === "timer" && status === "default") {
            navigation.navigate("Timer", { card })
        }
        if (type === "counter" && status === "default") {
            addHabit(card)
        }
    }
    return (
        <TouchableOpacity style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: status === "Skipped" ? colors.error : status === "Success" ? colors.success : colors.gray200

        }}
            onPress={action}
        >
            {status === "Skipped" ? <Fail /> : status === "Success" ? <Complete /> : type === "timer" ? <Timer /> : <Plus />}
        </TouchableOpacity>
    )
}

export default Button