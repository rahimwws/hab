import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/shared/lib/theme/colors";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/features/habit-management";
import Peoples from "./card/ui/Peoples";
import { Habit } from "../model/types/habit";
import { ProgressFormat } from "../lib/format/ProgressFormat";
import SwipeableRow from "./SwipeableRow";
import { useHabitStore } from "../lib/state/HabitStore";
import Progress from "./card/ui/Progress";
import Status from "./card/ui/Status";
import {
  useAddCompleteDate,
  useStatus,
} from "@/features/habit-management/lib/hooks/mutation";
import { dateFormat } from "../model/date/dateFormat";
import { statusForToday } from "@/shared/lib/complete";

const Card = ({ card }: { card: Habit }) => {
  const { failedItem, successItem } = useHabitStore();
  const { mutate } = useStatus(card.id);
  const { mutate: complete } = useAddCompleteDate();

  const currentStatus = statusForToday(card);

  return (
    <SwipeableRow
      onDelete={() => {
        failedItem(card);
        mutate({ status: "failed" });
      }}
      onArchive={() => {
        successItem(card);
        complete({ id: card.id, date: dateFormat(new Date()) });
      }}
    >
      <TouchableOpacity
        style={{
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
          backgroundColor: colors.white,
        }}
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
            status={card.public ? "public" : "private"}
            quantity={card.relations.length}
          />
          <Button status={currentStatus} type={card.type} card={card} />
        </View>
      </TouchableOpacity>
    </SwipeableRow>
  );
};

export default Card;
