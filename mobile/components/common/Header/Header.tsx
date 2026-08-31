import { View, Text, StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "@/constants/metrics/metrics";
import React from "react";
import { UIColors } from "@/constants/theme";
import { screenHorizontalPadding } from "@/components/common/Screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import {useHeaderContext} from "./HeaderContext";

const Header = () => {

  const { headerTranslateY, headerHeight } = useHeaderContext();

  const animatedStyle = useAnimatedStyle(()=>{
    return {
      transform: [{ translateY: headerTranslateY.value }],
    }
  })

  return (
   <Animated.View style={[styles.wrapper, animatedStyle]}
    onLayout={(e) => {
      const height = e.nativeEvent.layout.height;
      headerHeight.value = height;
    }}
   >
      <SafeAreaView style={styles.header}>
        <View>
          <Text style={styles.title}>Arcadia</Text>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper:{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    elevation: 10,
    paddingHorizontal: screenHorizontalPadding,
  },
  header: {
    backgroundColor: UIColors.background,
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(5)
  },
  title: {
    fontSize: moderateScale(25, 0.5),
    fontFamily: "Fredoka_500Medium",
    color: "#000",
    textAlign: "left",
    marginBottom: verticalScale(2),
  },
  subtitle: {
    fontSize: moderateScale(18, 0.4),
    fontFamily: "Fredoka_500Medium", // or use a lighter weight if available
    color: "#000",
    textAlign: "left",
    marginBottom: verticalScale(1),
  },
  tagline: {
    fontSize: moderateScale(14, 0.3),
    fontFamily: "Fredoka_400Regular", // fallback to a regular weight
    color: "#333",
    textAlign: "left",
    opacity: 0.8,
  },
});