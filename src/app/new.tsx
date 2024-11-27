import { normalize } from "@/utils/functions";
import { AnimatedBox, Box, Text } from "@atoms";
import { Container, Icon, ScrollView, TouchableOpacity } from "@components";
import { useObservable } from "@legendapp/state/react";
import { useAnimatedStyle, withTiming } from "react-native-reanimated";

export default function Page() {
  const isFilterVisible = useObservable(false);
  const isFilterVisibleValue = isFilterVisible.get();

  const dropdownStyle = useAnimatedStyle(
    () => ({
      height: withTiming(isFilterVisibleValue ? 100 : 0, {
        duration: 500,
      }),
      display: withTiming(isFilterVisibleValue ? "flex" : "none", {
        duration: 400,
      }),
      opacity: withTiming(isFilterVisibleValue ? 1 : 0, {
        duration: 600,
      }),
    }),
    [isFilterVisibleValue],
  );

  return (
    <Container>
      <Box>
        <Text fontSize={normalize(30)}>New & Upcoming Releases</Text>
      </Box>
      <TouchableOpacity
        onPress={() => isFilterVisible.set(!isFilterVisible.get())}
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        gap={4}
        marginTop={3}
      >
        <Box
          borderWidth={1}
          borderColor="neutral800"
          padding={2}
          borderRadius={2}
        >
          <Icon name="SlidersVertical" size={4} />
        </Box>
        <AnimatedBox
          position="absolute"
          top={33}
          left={0}
          style={[dropdownStyle]}
          borderWidth={1}
          borderColor="neutral800"
          zIndex={10}
          backgroundColor="black"
        >
          <Box
            paddingHorizontal={2}
            paddingVertical={1}
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Text fontSize={normalize(13)}>DC</Text>
          </Box>
          <Box
            paddingHorizontal={2}
            paddingVertical={1}
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Text fontSize={normalize(13)}>Marvel</Text>
          </Box>
        </AnimatedBox>
      </TouchableOpacity>
      <ScrollView marginTop={4}>
        <Text>content</Text>
      </ScrollView>
    </Container>
  );
}
