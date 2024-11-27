import { normalize } from "@/utils/functions";
import { Box, Text } from "@atoms";
import { Container, Icon } from "@components";

export default function Page() {
  return (
    <Container alignItems="flex-start" gap={3}>
      <Text color="neutral200" fontSize={normalize(38)}>
        My Library
      </Text>
      <Box width="100%" borderWidth={0.2} borderColor="neutral200">
        <Box
          borderTopLeftRadius={2}
          borderTopRightRadius={2}
          flexDirection="row"
          alignItems="center"
          backgroundColor="neutral800"
          width="100%"
          padding={4}
          justifyContent="space-between"
        >
          <Text fontSize={normalize(14)}>On My Device</Text>
          <Icon name="ChevronRight" size={4} />
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          backgroundColor="neutral800"
          width="100%"
          padding={4}
          justifyContent="space-between"
          borderTopWidth={0.25}
          borderTopColor="neutral700"
          borderBottomLeftRadius={2}
          borderBottomRightRadius={2}
        >
          <Text fontSize={normalize(14)} color="neutral200">
            From A Server
          </Text>
          <Icon name="ChevronRight" size={4} />
        </Box>
      </Box>
      <Box marginTop={3} />
      <Text fontSize={normalize(32)}>My Servers</Text>
    </Container>
  );
}
