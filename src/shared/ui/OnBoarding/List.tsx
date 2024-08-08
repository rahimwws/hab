import { View, FlatList, Animated } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { Slide, slides } from "../../config/slides";
import Cart from "./Cart";
import { useAppNavigation } from "../../config/navigation/useAppNavigation";

const List = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList<Slide>>(null);
  const [forward, setForward] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        if (currentIndex < slides.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setForward(false);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          setForward(true);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, forward]);

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex]);
  return (
    <FlatList
      data={slides}
      renderItem={({ item }) => (
        <Cart
          description={item.description}
          title={item.title}
          image={item.image}
          scrollX={scrollX}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      scrollEnabled={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      ref={slidesRef}
    />
  );
};

export default List;
