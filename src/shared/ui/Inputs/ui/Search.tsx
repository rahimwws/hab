import { View, Text, TextInput, StyleProp, TextStyle } from "react-native";
import React from "react";
import colors from "@/shared/lib/theme/colors";
import { SearchSvg } from "@/shared/assets";

const Search = ({
  styles,
  onChangeText,
  action,
}: {
  styles?: StyleProp<TextStyle>;
  onChangeText: (text: string) => void;
  action?: any;
}) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          width: "100%",
          height: 50,
          borderWidth: 1,
          borderColor: colors.gray200,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 10,
          paddingLeft: 10,
        },
        styles,
      ]}
    >
      <SearchSvg />
      <TextInput
        autoFocus={true}
        autoCapitalize="none"
        placeholder="Search"
        style={{
          height: 50,
          width: "90%",
          fontFamily: "p-m",
          fontSize: 16,
        }}
        keyboardType="default"
        onEndEditing={action}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};

export default Search;
