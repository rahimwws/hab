import { View, Text } from "react-native";
import React from "react";
import colors from "@/shared/lib/theme/colors";
import { Path, Svg } from "react-native-svg";
import { Typography } from "@/shared/ui/Typography";

const Motivation = () => {
  return (
    <View
      style={{
        marginVertical: 20,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          top: 15,
          width: 70,
          height: 70,
          left: "3%",
          borderRadius: 10,
          backgroundColor: colors.primary100,
          justifyContent: "center",
          shadowColor: colors.primary400,
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 10,
          alignItems: "center",
        }}
      >
        <Svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <Path
            d="M8.09 11.63H3.4C3.48 6.95997 4.4 6.18997 7.27 4.48997C7.6 4.28997 7.71 3.86997 7.51 3.52997C7.32 3.19997 6.89 3.08997 6.56 3.28997C3.18 5.28997 2 6.50997 2 12.32V17.71C2 19.42 3.39 20.8 5.09 20.8H8.09C9.85 20.8 11.18 19.47 11.18 17.71V14.71C11.18 12.96 9.85 11.63 8.09 11.63Z"
            fill={colors.primary900}
          />
          <Path
            d="M18.9101 11.63H14.2201C14.3001 6.95997 15.2201 6.18997 18.0901 4.48997C18.4201 4.28997 18.5301 3.86997 18.3301 3.52997C18.1301 3.19997 17.7101 3.08997 17.3701 3.28997C13.9901 5.28997 12.8101 6.50997 12.8101 12.33V17.72C12.8101 19.43 14.2001 20.81 15.9001 20.81H18.9001C20.6601 20.81 21.9901 19.48 21.9901 17.72V14.72C22.0001 12.96 20.6701 11.63 18.9101 11.63Z"
            fill={colors.primary900}
          />
        </Svg>
      </View>
      <View
        style={{
          width: "90%",
          height: 100,
          backgroundColor: colors.primary50,
          justifyContent: "center",
          alignItems: "flex-end",
          paddingLeft: "5%",
          position: "absolute",
          right: 0,
          borderRadius: 7,
          paddingRight: 5,
        }}
      >
        <Typography align="left" font="p-m">
          It takes courage to grow up and become who you really are.
        </Typography>
      </View>
    </View>
  );
};

export default Motivation;
