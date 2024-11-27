import qClient from "@/api/config";
import { TabBar } from "@components";
import { enableReactNativeComponents } from "@legendapp/state/config/enableReactNativeComponents";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClientProvider } from "@tanstack/react-query";
import { theme } from "@theme";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import React from "react";

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

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={qClient}>
        <Tabs
          screenOptions={{ headerShown: false }}
          tabBar={(props) => <TabBar {...props} />}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
