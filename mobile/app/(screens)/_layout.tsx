import { Stack } from "expo-router";
import { UIColors } from "@/constants/theme";
import { View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useHeaderContext } from "@/components/common/Header/HeaderContext";

export default function ScreensLayout() {
  const { headerHeight } = useHeaderContext();

  const spacerStyle = useAnimatedStyle(() => ({
    height: headerHeight.value,
  }));

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={spacerStyle} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: UIColors.background,
          },
        }}
      />
    </View>
  );
}
