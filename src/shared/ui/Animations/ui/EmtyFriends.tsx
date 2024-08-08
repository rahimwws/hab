import { View, Text } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { LargeButton } from "../../Buttons";

const EmptyFriends = ({ isRelation = false }: { isRelation?: boolean }) => {
  const animation = useRef<LottieView>(null);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LottieView
        autoPlay
        ref={animation}
        onAnimationLoaded={() => {}}
        style={{
          marginBottom: -20,
          marginTop: -30,
          width: 320,
          height: 320,
        }}
        source={require("../../../assets/json/friends.json")}
      />

      <LargeButton
        text={isRelation ? "You need to have friends" : "Search new users..."}
        isRoute
        route={isRelation ? "Friends" : "AddFriend"}
      />
    </View>
  );
};

export default EmptyFriends;
