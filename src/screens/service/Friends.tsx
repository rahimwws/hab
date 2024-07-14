import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { StackHeader } from "@/entities/header";
import { SmallButton } from "@/shared/ui/Buttons";
import { Request } from "@/shared/assets";
import { ShareName } from "@/entities/share";
import { UserFriends } from "@/widget/friends";
import { Contacts } from "@/features/contact";

const Friends = () => {
  return (
    <ScreenContent>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: -50,
        }}
      >
        <StackHeader
          title="Friends"
          back={false}
          align="space-between"
          customButton={
            <SmallButton
              icon={<Request size={25} />}
              action={() => console.log("hello")}
            />
          }
        />

        <ShareName />
        <UserFriends />
        <Contacts />
      </ScrollView>
    </ScreenContent>
  );
};

export default Friends;
