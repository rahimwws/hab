import { RefreshControl, ScrollView } from "react-native";
import React, { useState } from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { StackHeader } from "@/shared/ui/Header";
import { SmallButton } from "@/shared/ui/Buttons";
import { Request } from "@/shared/assets";
import { ShareName } from "@/entities/share";
import { UserFriends } from "@/entities/friends";
import { Contacts } from "@/features/contact";
import { useAppNavigation } from "@/shared/config/navigation";
import { useFriends } from "@/entities/friends/lib/hooks/friends";
const Friends = () => {
  const navigation = useAppNavigation();
  const { refetch } = useFriends();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <ScreenContent>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: -50,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <StackHeader
          title="Friends"
          back={false}
          align="space-between"
          customButton={
            <SmallButton
              icon={<Request size={25} />}
              action={() => navigation.navigate("Requests")}
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
