import { View, Dimensions } from "react-native";
import React from "react";
import { Typography } from "../Typography";
import { slides } from "../../config/slides";
import Pagination from "./Pagination";
import ratio from "../../lib/theme/ratio";

type Props = {
  image: any;
  title: string;
  description: string;
  scrollX: any;
};

const Cart = ({ title, description, image, scrollX }: Props) => {
  return (
    <View
      style={{
        width: ratio.width,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 40,
      }}
    >
      <View
        style={{
          height: 350,
        }}
      >
        {image}
      </View>
      <Typography
        color="primary400"
        size={30}
        font="p-b"
        styles={{ marginBottom: 20 }}
      >
        {title}
      </Typography>
      <Typography color="gray400" size={18}>
        {description}
      </Typography>
    </View>
  );
};

export default Cart;
