import { FlatList, FlatListProps } from "react-native";
import { days } from "./types/days";

export const scrollToIndex = (index: number, flatListRef: React.RefObject<FlatList<any>>, data: days[]) => {
    const indexOfDay = data.findIndex(item => item.number === index)
    flatListRef?.current?.scrollToIndex({
        animated: true,
        index: indexOfDay,
    });

};