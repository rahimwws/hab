import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '@/src/shared/lib/theme/colors'
import { Typography } from '@/src/shared/ui/Typography'
import { Button } from '@/src/features/habit-management'
import Peoples from './card/ui/Peoples'
import { Habit } from '../lib/types/habit'
import { ProgressFormat } from '../lib/format/ProgressFormat'
import SwipeableRow from './SwipeableRow'
import { useHabitStore } from '../lib/state/HabitStore'
import Progress from './card/ui/Progress'
import Status from './card/ui/Status'

const Card = ({ card }: {
  card: Habit,
}) => {
  const { failedItem, successItem } = useHabitStore()
  return (
    <SwipeableRow onDelete={() => failedItem(card)} onArchive={() => successItem(card)}>
      <TouchableOpacity style={{
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
        backgroundColor: colors.white
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          width: "60%"
        }}>
          <Progress progress={ProgressFormat(card.remain, card.total)} type={card.status} emoji={card.emoji} />
          <View style={{
          }}>
            <Typography font='p-sb' size={14} align='left' styles={{}} >{card.name}</Typography>
            <Status remain={card.total - Number(card.remain)} type={card.type} total={card.total} status={card.status} />
          </View>
        </View>
        <View style={{
          flexDirection: "row",
          gap: 15,
          alignItems: "center"
        }}>
          <Peoples status={card.friends === "private" ? "private" : "public"} quantity={5} />
          <Button status={card.status} type={card.type} card = {card}/>
        </View>
      </TouchableOpacity>
    </SwipeableRow>

  )
}

export default Card