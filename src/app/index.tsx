import { normalize } from "@/utils/functions";
import { Box, Text } from "@atoms";
import { Container, Icon, TouchableOpacity } from "@components";
import React from "react";

export default function Page() {
  return (
    <Container gap={2} alignItems="flex-start">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Text color="neutral200" fontSize={normalize(26)}>
          Currently Reading
        </Text>
        <TouchableOpacity flexDirection="row">
          <Icon name="Menu" color="neutral200" size={6} />
        </TouchableOpacity>
      </Box>
    </Container>
  );
}
