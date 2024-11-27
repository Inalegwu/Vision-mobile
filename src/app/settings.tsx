import { normalize } from "@/utils/functions";
import { Box, Text } from "@atoms";
import { Container } from "@components";

export default function Page() {
  return (
    <Container alignItems="flex-start">
      <Box gap={1}>
        <Text color="neutral200" fontSize={normalize(36)}>
          Settings
        </Text>
        <Text color="neutral500" fontSize={normalize(14)}>
          Customize Your Experience
        </Text>
      </Box>
    </Container>
  );
}
