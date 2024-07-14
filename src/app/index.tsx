import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Introduction, Service } from "./navigation";
import { useFonts } from "expo-font";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
const Index = () => {
  const [fontsLoaded] = useFonts({
    "p-r": require("../../assets/fonts/Poppins-Regular.ttf"),
    "p-m": require("../../assets/fonts/Poppins-Medium.ttf"),
    "p-b": require("../../assets/fonts/Poppins-Bold.ttf"),
    "p-sb": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });
  const queryClient = new QueryClient();
  if (fontsLoaded) {
    return (
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <GestureHandlerRootView>
            <BottomSheetModalProvider>
              <Introduction />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </NavigationContainer>
      </QueryClientProvider>
    );
  }
};

export default Index;
