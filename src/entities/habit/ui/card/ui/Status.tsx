import React from "react";
import { View, StyleSheet } from "react-native";
import { Typography } from "@/shared/ui/Typography";
import StatusFormat from "../../../lib/format/StatusFormat";

const Status = ({
  status,
  remain,
  type,
  total,
}: {
  status: "success" | "failed" | "doing";
  remain: number;
  type: "timer" | "counter" | "default";
  total?: number;
}) => {
  let formattedValue = StatusFormat({ type, remain, total });
  if (status === "doing") {
    return (
      <View style={styles.container}>
        <Typography size={12} color="gray400" align="left">
          {formattedValue}
        </Typography>
      </View>
    );
  }

  const statusColor = status === "failed" ? "error" : "success";
  const statusText = status === "failed" ? "Skipped" : "Completed";

  return (
    <View style={styles.container}>
      <Typography size={12} color={statusColor} align="left">
        {statusText}
      </Typography>
      {status != "success" && (
        <>
          <Typography size={12} color="gray400" align="left">
            •
          </Typography>
          <Typography size={12} color="gray400" align="left">
            {formattedValue}
          </Typography>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
  },
});

export default Status;
