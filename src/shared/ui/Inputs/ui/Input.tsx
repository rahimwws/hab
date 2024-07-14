import {
  View,
  Text,
  TextInput,
  StyleProp,
  TextStyle,
  KeyboardType,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import colors from "@/shared/lib/theme/colors";
import Eyes from "@/shared/assets/icons/interface/Eyes";

const Input = ({
  placeholder,
  styles,
  type = "default",
  password = false,
  onChangeText,
  action,
  error = false,
}: {
  placeholder: string;
  styles?: StyleProp<TextStyle>;
  type?: KeyboardType;
  password?: boolean;
  onChangeText?: (text: string) => void;
  action?: any;
  error?: boolean;
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(
    !password
  );

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View
      style={[
        {
          flexDirection: "row",
          width: "100%",
          height: 50,
          borderWidth: 1,
          borderColor: error ? colors.error : colors.gray200,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 10,
        },
        styles,
      ]}
    >
      <TextInput
        autoCapitalize="none"
        placeholder={placeholder}
        style={{
          height: 50,
          width: "90%",
          paddingHorizontal: 15,
          fontFamily: "p-m",
          fontSize: 16,
        }}
        keyboardType={type}
        secureTextEntry={password && !isPasswordVisible}
        onChangeText={onChangeText}
        onEndEditing={action}
      />
      {password && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          activeOpacity={0.8}
        >
          <Eyes show={isPasswordVisible} size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
