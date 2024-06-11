import { View, Text } from 'react-native'
import React from 'react'
import * as ProgressBar from 'react-native-progress';
import colors from '@/src/shared/lib/theme/colors';
import { Typography } from '../../Typography';

const Progress = ({ progress, color }: {
    progress: number,
    color?: string,
}) => {
    return (
        <ProgressBar.Circle
            size={42}
            progress={progress}
            unfilledColor={colors.gray200}
            borderColor={colors.gray200}
            borderWidth={0}
            color={color}
            thickness={2.5}
            style={{
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Typography styles={{ position: "absolute" }} size={20}>💧</Typography>
        </ProgressBar.Circle>
    )
}

export default Progress