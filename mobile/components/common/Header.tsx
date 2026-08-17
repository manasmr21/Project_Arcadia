import { View, Text, StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "@/constants/metrics/metrics";
import React from "react";
import { UIColors } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <Text style={styles.title}>Arcadia</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: UIColors.background,
    paddingTop: verticalScale(10),
  },
  container: {
    paddingHorizontal: horizontalScale(5),
    paddingBottom: verticalScale(12),
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