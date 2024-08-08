import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "@/shared/lib/theme/colors";
import { Typography } from "@/shared/ui/Typography";
import { Invite, SmallButton } from "@/shared/ui/Buttons";
import { ArrowLeft, ArrowRight, Complete, Plus } from "@/shared/assets";
import { useAppNavigation } from "@/shared/config/navigation";
import { useSendRequests } from "../../lib/hooks/requests";
import { User } from "@/features/profile/model/types/User";
import { useAddFriend } from "@/features/management/lib/hooks/mutation";
import useEditHabitStore from "@/features/management/lib/state/editStore";

const FriendCard = ({
  isRelation = false,
  friend,
  invite,
  habitId,
}: {
  friend: User;
  invite?: boolean | false;
  isRelation?: boolean;
  habitId?: number | false;
}) => {
  const [activated, setActivated] = useState<boolean>(false);
  const { mutate: sendRequest } = useSendRequests();
  const navigation = useAppNavigation();
  const { mutate } = useAddFriend();
  const { relation, habit } = useEditHabitStore((store) => {
    return { habit: store.habit, relation: store.setRelation };
  });
  useEffect(() => {
    if (habit.relations.includes(friend.id)) {
      setActivated(true);
    }
  }, [habit]);
  const addFriend = () => {
    if (!habitId && !habit.relations.includes(friend.id)) {
      relation(friend.id);
      setActivated(true);
    } else if (habitId) {
      mutate({ id: habitId, username: friend.username });
      setActivated(true);
    }
  };
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
      {isRelation ? (
        <SmallButton
          action={addFriend}
          icon={!activated ? <Plus /> : <Complete />}
        />
      ) : invite ? (
        <Invite action={() => sendRequest(friend.username)} />
      ) : (
        <SmallButton action={() => {}} icon={<ArrowRight />} />
      )}
    </TouchableOpacity>
  );
};

export default FriendCard;
