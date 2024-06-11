import React, { useCallback, forwardRef } from 'react';
import BottomSheet, { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../../Typography';
import colors from '@/src/shared/lib/theme/colors';
import { Close } from '@/src/shared/assets';

interface HabitSheetProps {
    children: React.ReactNode;
    title?: string,
    action: () => void;
}

const HabitSheet = forwardRef<BottomSheetModal, HabitSheetProps>(({ title, children, action }, ref) => {
    const snapPoints = ["40%"];

    const renderBackDrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                pressBehavior = "none"
                {...props}
            />
        ),
        []
    );

    return (
        <BottomSheetModal
            backdropComponent={renderBackDrop}
            ref={ref}
            snapPoints={snapPoints}
            enableHandlePanningGesture={false}
            handleIndicatorStyle={{
                backgroundColor: "transparent"
            }}
            enableContentPanningGesture={false}

        >
            <View style={{
                flex: 1,
                paddingHorizontal: 20,
            }}>
                <View style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10
                }}>
                    <Typography font='p-b' size={22}>{title}</Typography>
                    <TouchableOpacity style={{
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 40,
                        height: 40,
                        borderRadius: 40,
                        borderWidth: 1,
                        borderColor: colors.gray200,
                        zIndex: 1,
                        right: 0
                    }}
                        onPress={action}
                    >
                        <Close />
                    </TouchableOpacity>
                </View>
                {children}
            </View>
        </BottomSheetModal>
    );
});

export default HabitSheet;
