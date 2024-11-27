import { normalize } from "@/utils/functions";
import { Box, Text } from "@atoms";
import { Container, Icon, TouchableOpacity } from "@components";

export default function Page() {
  return (
    <Container alignItems="flex-start" gap={3}>
      <Text color="neutral200" fontSize={normalize(38)}>
        My Library
      </Text>
      <Box width="100%" borderWidth={0.2} borderColor="neutral200">
        <TouchableOpacity
          activeOpacity={0.9}
          borderTopLeftRadius={2}
          borderTopRightRadius={2}
          flexDirection="row"
          alignItems="center"
          backgroundColor="neutral900"
          width="100%"
          padding={4}
          justifyContent="space-between"
        >
          <Text fontSize={normalize(14)}>On My Device</Text>
          <Icon name="ChevronRight" size={4} />
        </TouchableOpacity>
        <TouchableOpacity
          flexDirection="row"
          alignItems="center"
          backgroundColor="neutral900"
          width="100%"
          activeOpacity={0.9}
          padding={4}
          justifyContent="space-between"
          borderTopWidth={0.6}
          borderTopColor="neutral800"
          borderBottomLeftRadius={2}
          borderBottomRightRadius={2}
        >
          <Text fontSize={normalize(14)}>From A Server</Text>
          <Icon name="ChevronRight" size={4} />
        </TouchableOpacity>
      </Box>
      <Box marginTop={3} />
      <Text fontSize={normalize(32)}>My Servers</Text>
    </Container>
  );
}
