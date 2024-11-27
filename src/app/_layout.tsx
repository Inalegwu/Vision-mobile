import qClient from "@/api/config";
import { Box } from "@atoms";
import { TabBar } from "@components";
import { enableReactNativeComponents } from "@legendapp/state/config/enableReactNativeComponents";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClientProvider } from "@tanstack/react-query";
import { theme } from "@theme";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as TaskManager from "expo-task-manager";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

enableReactTracking({
  auto: true,
});

enableReactNativeComponents();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    bricolage: require("../assets/fonts/bricolage.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  TaskManager.defineTask("INDEX_FOLDERS", async ({ data, error }) => {
    if (error) {
      console.log(error);
      return;
    }
    if (!data) return;
    console.log(data);
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={qClient}>
        <Box width="100%" flex={1} backgroundColor="black">
          <SafeAreaView style={{ flex: 1, width: "100%" }}>
            <StatusBar style="dark" />
            <Tabs
              screenOptions={{ headerShown: false }}
              tabBar={(props) => <TabBar {...props} />}
            />
          </SafeAreaView>
        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
