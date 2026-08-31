import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import Header from "@/components/common/Header/Header";
import {
  useFonts,
  Fredoka_500Medium,
  Fredoka_700Bold,
  Fredoka_300Light,
  Fredoka_400Regular,
} from "@expo-google-fonts/fredoka";
import Screen from "@/components/common/Screen";
import { UIColors } from "@/constants/theme";
import { HeaderProvider, useHeaderContext } from "@/components/common/Header/HeaderContext";

export const unstable_settings = {
  anchor: "(screens)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoadded] = useFonts({
    Fredoka_400Regular,
    Fredoka_300Light,
    Fredoka_500Medium,
    Fredoka_700Bold,
  });

  if (!fontsLoadded) {
    return null;
  }

  return (
      <HeaderProvider>
        <Screen>
          <Header />
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: UIColors.background,
              },
            }}
          >
            <Stack.Screen name="(screens)" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style="auto" />
        </Screen>
      </HeaderProvider>
  );
}
