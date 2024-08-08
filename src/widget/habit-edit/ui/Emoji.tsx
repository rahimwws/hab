import React, { useState, useRef, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import colors, { ColorOption } from "@/shared/lib/theme/colors";
import EmojiPicker, { EmojiType } from "rn-emoji-keyboard";
import { Typography } from "@/shared/ui/Typography";
import { formatEmojiName } from "../model/format";
import ColorPicker from "./ColorPicker";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { HabitSheet } from "@/shared/ui/BottomSheet";
import { Habit } from "@/entities/habit/model/types";
import useEditHabitStore from "../../../features/management/lib/state/editStore";

const Emoji = ({ habit }: { habit: Habit | null }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { emoji, setEmoji, color, setColor } = useEditHabitStore((store) => ({
    emoji: store.habit.emoji,
    setEmoji: store.setEmoji,
    color: store.habit.color,
    setColor: store.setColor,
  }));
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handlePick = (emojiObject: EmojiType) => {
    setEmoji(emojiObject);
  };

  const handleColorSelect = (selectedColor: ColorOption) => {
    setColor(selectedColor);
    bottomSheetRef.current?.close();
  };

  useEffect(() => {
    if (habit) {
      setColor({
        name: habit.color.charAt(0).toUpperCase() + habit.color.slice(1),
        code: habit.color,
      });
      setEmoji({
        emoji: habit.emoji,
        name: habit.name,
        slug: "",
        unicode_version: "",
        toneEnabled: false,
      });
    }
  }, [habit, setColor, setEmoji]);

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "48%",
            borderWidth: 1,
            borderColor: colors.gray200,
            height: 70,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: colors.gray100,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setIsOpen(true)}
          >
            <Typography size={30}>{emoji}</Typography>
          </TouchableOpacity>
          <View>
            <Typography align="left" font="p-m">
              {formatEmojiName(emoji)}
            </Typography>
            <Typography align="left" size={14} color="gray400">
              Icon
            </Typography>
          </View>
        </View>
        <View
          style={{
            width: "48%",
            borderWidth: 1,
            borderColor: colors.gray200,
            height: 70,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: color,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => bottomSheetRef.current?.present()}
          />
          <View>
            <Typography align="left" font="p-m">
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Typography>
            <Typography align="left" size={14} color="gray400">
              Color
            </Typography>
          </View>
        </View>
      </View>
      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <HabitSheet
        showHeader={false}
        title="Choose Color"
        action={() => bottomSheetRef.current?.close()}
        snapPoints={["20%"]}
        ref={bottomSheetRef}
      >
        <ColorPicker onColorSelect={handleColorSelect} />
      </HabitSheet>
    </>
  );
};

export default Emoji;
