import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/shared/lib/theme/colors";
import { Typography } from "@/shared/ui/Typography";
import Peoples from "./card/ui/Peoples";
import { Habit } from "../model/types";
import { ProgressFormat } from "../lib/format/ProgressFormat";
import SwipeableRow from "./SwipeableRow";
import { useHabitStore } from "../lib/state/HabitStore";
import Progress from "./card/ui/Progress";
import Status from "./card/ui/Status";

import { dateFormat } from "../model/date/dateFormat";
import { statusForToday } from "@/shared/lib/complete";
import {
  useAddCompleteDate,
  useStatus,
  useTimerLeft,
} from "@/features/management/lib/hooks/mutation";
import { Button } from "@/features/management";
import { useAppNavigation } from "@/shared/config/navigation";

const Card = ({ card }: { card: Habit }) => {
  const navigation = useAppNavigation();
  const { failedItem, successItem } = useHabitStore();
  const { mutate } = useStatus(card.id);
  const { mutate: complete } = useAddCompleteDate();
  const { mutate: changeRemain } = useTimerLeft();
  const currentStatus = statusForToday(card);

  return (
    <SwipeableRow
      onDelete={() => {
        failedItem(card);
        mutate({ status: "failed" });
      }}
      onArchive={async () => {
        if (card.type === "timer") {
          changeRemain({ id: card.id, remain: 15 });
        }
        successItem(card);
        complete({ id: card.id, date: dateFormat(new Date()) });
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: colors.white,
          width: "100%",
          zIndex: 1,
          borderWidth: 1,
          borderColor: colors.gray200,
          height: 70,
          alignItems: "center",
          borderRadius: 15,
          paddingHorizontal: 10,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
        onPress={() => navigation.navigate("HabitDetail", { habit: card })}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            width: "60%",
          }}
        >
          <Progress
            progress={ProgressFormat(card.remain, card.total)}
            type={currentStatus}
            emoji={card.emoji}
          />
          <View>
            <Typography font="p-sb" size={14} align="left">
              {card.name}
            </Typography>
            <Status
              remain={card.total - Number(card.remain)}
              type={card.type}
              total={card.total}
              status={currentStatus}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
            alignItems: "center",
          }}
        >
          <Peoples
            id={card.id}
            status={card.public ? "public" : "private"}
            quantity={card.relations ? card.relations.length : 0}
          />
          <Button status={currentStatus} type={card.type} card={card} />
        </View>
      </TouchableOpacity>
    </SwipeableRow>
  );
};

export default Card;
