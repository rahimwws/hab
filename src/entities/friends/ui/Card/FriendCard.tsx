import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/shared/lib/theme/colors";
import { Typography } from "@/shared/ui/Typography";
import { Invite, SmallButton } from "@/shared/ui/Buttons";
import { ArrowLeft, ArrowRight } from "@/shared/assets";
import { useAppNavigation } from "@/shared/config/navigation";
import { useSendRequests } from "../../lib/hooks/requests";
import { User } from "@/features/profile/model/types/User";

const FriendCard = ({
  friend,
  invite,
}: {
  friend: User;
  invite?: boolean | false;
}) => {
  const { mutate: sendRequest } = useSendRequests();
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      style={{
        marginVertical: 10,
        borderColor: colors.gray200,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "80%",
          flexDirection: "row",
          gap: 10,
        }}
      >
        {friend.avatarUrl && (
          <Image
            source={{ uri: friend.avatarUrl }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              zIndex: 1,
            }}
          />
        )}
        <View style={{}}>
          <Typography size={16} font="p-m" align="left">
            {friend.name}
          </Typography>
          <Typography size={14} font="p-m" align="left" color="primary400">
            @{friend.username}
          </Typography>
          {friend.age !== 0 && (
            <Typography size={12} font="p-m" align="left" color="gray400">
              {friend.age} years old
            </Typography>
          )}
        </View>
      </View>
      {invite ? (
        <Invite action={() => sendRequest(friend.username)} />
      ) : (
        <SmallButton action={() => {}} icon={<ArrowRight />} />
      )}
    </TouchableOpacity>
  );
};

export default FriendCard;
