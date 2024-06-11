import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Sun = ({ color }: {
  color: string
}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 20 20" fill="none" >
      <Path d="M5.83341 6.54163C5.05008 7.48329 4.58341 8.68329 4.58341 9.99996C4.58341 12.9916 7.00842 15.4166 10.0001 15.4166C12.9917 15.4166 15.4167 12.9916 15.4167 9.99996C15.4167 7.00829 12.9917 4.58329 10.0001 4.58329M15.8417 4.15829L15.9501 4.04996M4.05008 15.95L4.15841 15.8416M10.0001 1.73329V1.66663M10.0001 18.3333V18.2666M1.73341 9.99996H1.66675M18.3334 9.99996H18.2667M4.15841 4.15829L4.05008 4.04996M15.9501 15.95L15.8417 15.8416" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export default Sun