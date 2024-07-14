import React from "react";
import * as ProgressBar from "react-native-progress";
import colors from "@/shared/lib/theme/colors";
import { Typography } from "@/shared/ui/Typography";

const Progress = ({
  progress,
  type,
  emoji,
}: {
  progress: number;
  type?: "success" | "failed" | "doing";
  emoji?: string;
}) => {
  return (
    <ProgressBar.Circle
      size={42}
      progress={progress}
      unfilledColor={colors.gray200}
      borderColor={colors.gray200}
      borderWidth={0}
      color={
        type === "failed"
          ? colors.error
          : type === "success"
          ? colors.success
          : colors.primary400
      }
      thickness={2.5}
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography styles={{ position: "absolute" }} size={20}>
        {emoji}
      </Typography>
    </ProgressBar.Circle>
  );
};

export default Progress;
