import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import {
  useAcceptRequests,
  useGetRequests,
} from "@/entities/friends/lib/hooks/requests";
import { Typography } from "@/shared/ui/Typography";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { StackHeader } from "@/shared/ui/Header";
import { EmptyRequests, SearchSvg } from "@/shared/assets";
import { SmallButton } from "@/shared/ui/Buttons";
import { useAppNavigation } from "@/shared/config/navigation";
import colors from "@/shared/lib/theme/colors";
import { Card } from "@/entities/requests";
const Requests = () => {
  const navigation = useAppNavigation();
  const { data, refetch } = useGetRequests();
  const { mutate } = useAcceptRequests();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <ScreenContent>
      <StackHeader
        title="Requests"
        customButton={
          <SmallButton
            icon={<SearchSvg color={colors.primary900} />}
            action={() => navigation.navigate("AddFriend")}
          />
        }
      />

      {data?.length === 0 || !data ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginTop: "20%",
          }}
        >
          <EmptyRequests />
          <Typography font="p-sb" size={28} styles={{ marginBottom: 10 }}>
            No Requests to show
          </Typography>
          <Typography color="gray400" size={18} font="p-m">
            You currently have no Requests to show. We will notify you when
            something happend
          </Typography>
        </View>
      ) : (
        data.map((username, key) => {
          return (
            <Card
              username={username}
              key={key}
              action={() => mutate(username)}
            />
          );
        })
      )}
    </ScreenContent>
  );
};

export default Requests;
