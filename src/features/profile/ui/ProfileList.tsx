import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { list } from "../lib/data/list";
import { Typography } from "@/shared/ui/Typography";
import { Item } from "../model/types/Item";
import { ArrowLeft, ArrowRight } from "@/shared/assets";

const ProfileList = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={list}
        keyExtractor={(item, index) => "item-" + index}
        renderItem={({ item }) => {
          if ("type" in item && item.type === "header") {
            return (
              <Typography
                align="left"
                font="p-sb"
                size={26}
                styles={{ marginVertical: 15 }}
              >
                {item.title}
              </Typography>
            );
          }
          const listItem = item as Item;
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                {listItem.icon}
                <Typography align="left" size={18}>
                  {listItem.title}
                </Typography>
              </View>
              <TouchableOpacity>
                <ArrowRight />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ProfileList;
