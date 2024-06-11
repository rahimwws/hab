import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ScreenContent = ({ children, px = 20, styles, showPx = true }: { children: React.ReactNode, px?: number, styles?: StyleProp<ViewStyle>, showPx?: boolean }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: showPx ? px : 0,
        ...styles as Object
      }}>

      {children}

    </SafeAreaView>
  )
}

export default ScreenContent