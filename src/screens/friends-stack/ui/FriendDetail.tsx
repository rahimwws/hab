import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { ScreenContent } from "@/shared/ui/ScreenContent";

const FriendDetail = () => {
  const route = useRoute();
  console.log(route.params);
  return (
    <ScreenContent>
      <Text>FriendDetail</Text>
    </ScreenContent>
  );
};

export default FriendDetail;
