import React from "react";
import { View, TouchableOpacity } from "react-native";
import colors from "@/shared/lib/theme/colors";

interface ColorPickerProps {
  onColorSelect: (color: any) => void;
}

const colorOptions = [
  { name: "Black", code: colors.black },
  { name: "Red", code: colors.error },
  { name: "Violet", code: colors.primary400 },
  { name: "Green", code: colors.success },
  { name: "Yellow", code: colors.yellow },
];

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorSelect }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {colorOptions.map((color) => (
        <TouchableOpacity
          key={color.code}
          style={{
            backgroundColor: color.code,
            width: 40,
            height: 40,
            borderRadius: 20,
            marginHorizontal: 5,
          }}
          onPress={() => onColorSelect(color)}
        />
      ))}
    </View>
  );
};

export default ColorPicker;
