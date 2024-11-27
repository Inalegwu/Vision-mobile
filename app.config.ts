import type { ConfigContext, ExpoConfig } from "@expo/config";
import { ClientEnv } from "./env";
import pkg from "./package.json";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Vision",
  slug: "vision",
  version: pkg.version,
  newArchEnabled: true,
  extra: {
    ...ClientEnv,
  },
  plugins: ["expo-font", "expo-router"],
});
