import React, { useEffect, useState } from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { StackHeader } from "@/shared/ui/Header";
import { Search } from "@/shared/ui/Inputs";
import { KeyboardAvoidingView, View } from "react-native";
import { LargeButton } from "@/shared/ui/Buttons";
import { useSearchFriends } from "@/entities/friends/lib/hooks/requests";
import FriendCard from "@/entities/friends/ui/Card/FriendCard";
const AddFriend = () => {
  const [username, setUsername] = useState<string>("");
  const { mutate, data } = useSearchFriends();
  const action = () => {
    if (username && username) mutate(username);
  };
  return (
    <ScreenContent>
      <StackHeader title="Find Friends" />
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Search
          styles={{ marginVertical: 20 }}
          onChangeText={(text) => setUsername(text)}
          action={action}
        />
        <View>
          {data?.map((friend, index) => (
            <FriendCard friend={friend} key={index} invite />
          ))}
        </View>
        <View
          style={{
            alignSelf: "flex-end",
            marginTop: "auto",
            width: "100%",
            marginBottom: 10,
          }}
        >
          <LargeButton text="Find" isRoute={false} action={action} />
        </View>
      </KeyboardAvoidingView>
    </ScreenContent>
  );
};

export default AddFriend;
