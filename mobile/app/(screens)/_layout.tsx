import { router, Stack } from "expo-router";
import { UIColors } from "@/constants/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, View } from "react-native";
import { useHeaderContext } from "@/components/common/Header/HeaderContext";
import { usePathname } from "expo-router";

export default function ScreensLayout() {
  const pathname = usePathname();

  const { headerHeight } = useHeaderContext();
  return (
    <View style={{ flex: 1 }}>
      {pathname != "/" && (
        <Pressable
          style={{ marginTop: headerHeight.value }}
          onPress={() => router.back()}
        >
          <AntDesign name="arrow-left" size={24} color="black" />
        </Pressable>
      )}
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
          contentStyle: {
            backgroundColor: UIColors.background,
          },
        }}
      />
    </View>
  );
}
