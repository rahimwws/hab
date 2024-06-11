import { View, Text } from 'react-native'
import React from 'react'
import * as ProgressBar from 'react-native-progress';
import colors from '@/src/shared/lib/theme/colors';
import { Typography } from '@/src/shared/ui/Typography';

const Progress = ({ progress, type, emoji }: {
    progress: number,
    type?: "Success" | "Skipped" | "default",
    emoji?: string
}) => {
    return (
        <ProgressBar.Circle
            size={42}
            progress={progress}
            unfilledColor={colors.gray200}
            borderColor={colors.gray200}
            borderWidth={0}
            color={type === "Skipped" ? colors.error : type === "Success" ? colors.success : colors.primary400}
            thickness={2.5}
            style={{
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Typography styles={{ position: "absolute" }} size={20}>{emoji}</Typography>
        </ProgressBar.Circle>
    )
}

export default Progress