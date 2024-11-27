import { comics } from "@/api/routers/comics";
import { normalize } from "@/utils/functions";
import { Box, Text } from "@atoms";
import { Container, Icon, ScrollView, TouchableOpacity } from "@components";

export default function Page() {
  const { data, isLoading } = comics.new.useQuery();

  return (
    <Container alignItems="flex-start" gap={3}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Text fontSize={normalize(30)}>My Library</Text>
        <Box alignItems="center" justifyContent="center">
          <Icon name="HardDriveDownload" size={5} color="blue500" />
        </Box>
      </Box>
      <ScrollView>
        {isLoading && <Text>Loading</Text>}

        <Text>{JSON.stringify(data, null, 2)}</Text>
      </ScrollView>
      <TouchableOpacity
        backgroundColor="blue500"
        position="absolute"
        zIndex={4}
        padding={4}
        bottom={10}
        right={10}
        borderRadius="full"
      >
        <Icon name="Plus" size={6} />
      </TouchableOpacity>
    </Container>
  );
}
