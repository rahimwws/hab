import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "@/shared/lib/theme/colors";
import { Typography } from "../../Typography";

const Invite = ({ action }: { action?: () => void | false }) => {
  const [added, setAdded] = useState<boolean>(false);
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 15,
        backgroundColor: added ? colors.success : colors.primary400,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        height: 30,
      }}
      onPress={() => {
        setAdded(true);
        action && action();
      }}
    >
      <Typography color="white" font="p-m" size={14}>
        {added ? "Sent" : "Invite"}
      </Typography>
    </TouchableOpacity>
  );
};

export default Invite;
