import { normalize } from "@/utils/functions";
import { Text } from "@atoms";
import { Container } from "@components";

export default function Page() {
  return (
    <Container alignItems="flex-start">
      <Text color="neutral200" fontSize={normalize(29)}>
        Settings
      </Text>
    </Container>
  );
}
