import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '@/src/shared/ui/Typography';
import StatusFormat from '../../../lib/format/StatusFormat';

const Status = ({ status = "default", remain, type, total }: {
    status?: "Success" | "Skipped" | "default",
    remain: number,
    type: "timer" | "counter" | "default",
    total?: number,
}) => {
    let formattedValue = StatusFormat({ type, remain, total })
    if (status === "default") {
        return (
            <View style={styles.container}>
                <Typography size={12} color="gray400" align="left">{formattedValue}</Typography>
            </View>
        );
    }

    const statusColor = status === 'Skipped' ? 'error' : 'success';
    const statusText = status === 'Skipped' ? 'Skipped' : 'Success';

    return (
        <View style={styles.container}>
            <Typography size={12} color={statusColor} align="left">{statusText}</Typography>
            {status != "Success" && (
                <>
                    <Typography size={12} color="gray400" align="left">•</Typography>
                    <Typography size={12} color="gray400" align="left">{formattedValue}</Typography>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 5,
    },
});

export default Status;
