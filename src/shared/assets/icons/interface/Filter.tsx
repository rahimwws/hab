import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Filter = ({color}:{
    color:string
}) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 20 20" fill="none" >
    <Path d="M2.5 5.83337H17.5M5 10H15M8.33333 14.1667H11.6667" stroke={color} strokeWidth="1.5" stroke-linecap="round" />
  </Svg>
  )
}

export default Filter