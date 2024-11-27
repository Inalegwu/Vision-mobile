import { type ColorProps, useTheme } from "@shopify/restyle";
import type { Theme } from "@theme";
import { icons } from "lucide-react-native";
import { memo } from "react";

type Props = {
  name: keyof typeof icons;
  size?: keyof Theme["spacing"];
} & ColorProps<Theme>;

const Icon = memo(({ name, color, size }: Props) => {
  const theme = useTheme<Theme>();
  const vColor = theme.colors[color || "neutral200"];
  const vSize = theme.spacing[size || 1];

  const LucideIcon = icons[name];

  return <LucideIcon color={vColor} size={vSize} />;
});

export default Icon;
