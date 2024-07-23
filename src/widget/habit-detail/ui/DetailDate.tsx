import { View, Text } from "react-native";
import React from "react";
import { Typography } from "@/shared/ui/Typography";
import colors from "@/shared/lib/theme/colors";
import { formatDateSheet } from "@/features/calendar/model/format/formatDate";

const DetailDate = ({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) => {
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          borderBottomWidth: 1,
          paddingBottom: 10,
          borderColor: colors.gray200,
        }}
      >
        <View
          style={{
            width: "50%",
          }}
        >
          <Typography align="left" color="gray400">
            Start Date
          </Typography>
          <Typography align="left" size={16}>
            {formatDateSheet(startDate)}
          </Typography>
        </View>

        <View
          style={{
            width: "50%",
          }}
        >
          <Typography align="left" color="gray400">
            End Date
          </Typography>
          <Typography align="left" size={16}>
            {formatDateSheet(endDate)}
          </Typography>
        </View>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Typography align="left" color="gray400">
          Progress and Tracking
        </Typography>
      </View>
    </View>
  );
};

export default DetailDate;
