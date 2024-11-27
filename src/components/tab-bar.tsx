import { normalize } from "@/utils/functions";
import { Box, Text } from "@atoms";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import type React from "react";
import Icon from "./icons";
import TouchableOpacity from "./touchable-opacity";

const TabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  return (
    <Box
      backgroundColor="black"
      borderTopColor="neutral900"
      borderTopWidth={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      gap={3}
    >
      {state.routes.map((route, idx) => {
        const isFocused = state.index === idx;

        const color = isFocused ? "neutral200" : "neutral500";

        const onPress = () => {
          const evt = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !evt.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () =>
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });

        if (route.name === "+not-found" || route.name === "_sitemap") {
          return null;
        }

        return (
          <TouchableOpacity
            padding={4}
            key={`${route.key}__${idx}`}
            onPress={onPress}
            onLongPress={onLongPress}
            alignItems="center"
            justifyContent="center"
            activeOpacity={0.9}
            gap={2}
          >
            {route.name === "index" ? (
              <>
                <Icon name="House" size={5} color={color} />
                <Text color={color} fontSize={normalize(13)}>
                  Home
                </Text>
              </>
            ) : route.name === "library" ? (
              <>
                <Icon name="Library" size={5} color={color} />
                <Text fontSize={normalize(13)} color={color}>
                  Library
                </Text>
              </>
            ) : route.name === "settings" ? (
              <>
                <Icon name="Settings" size={5} color={color} />
                <Text fontSize={normalize(13)} color={color}>
                  Settings
                </Text>
              </>
            ) : (
              <Icon name="ArrowDown" size={5} color="slate200" />
            )}
          </TouchableOpacity>
        );
      })}
    </Box>
  );
};

export default TabBar;
