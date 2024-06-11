import React, { useCallback } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Introduction, Service } from './navigation'
import { useFonts } from 'expo-font';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Index = () => {
    const [fontsLoaded] = useFonts({
        'p-r': require("@/assets/fonts/Poppins-Regular.ttf"),
        'p-m': require("@/assets/fonts/Poppins-Medium.ttf"),
        'p-b': require("@/assets/fonts/Poppins-Bold.ttf"),
        'p-sb': require("@/assets/fonts/Poppins-SemiBold.ttf"),
    });
    if (fontsLoaded) {
        return (
            <NavigationContainer>
                <GestureHandlerRootView>
                    <BottomSheetModalProvider>
                        <Introduction />
                    </BottomSheetModalProvider>
                </GestureHandlerRootView>
            </NavigationContainer>
        )
    }
}

export default Index