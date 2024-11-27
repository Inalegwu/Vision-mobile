import { normalize } from "@/utils/functions";
import { Box, Text } from "@atoms";
import { Container, Icon, TouchableOpacity } from "@components";
import React from "react";

export default function Page() {
  return (
    <Container gap={2} alignItems="flex-start">
      <Box width="100%" flex={1}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize={normalize(25)}>Currently Reading</Text>
          <TouchableOpacity flexDirection="row" alignItems="center">
            <Text fontSize={normalize(12)}>See All</Text>
            <Icon name="ChevronRight" size={4} />
          </TouchableOpacity>
        </Box>
      </Box>
      <Box width="100%" flex={1}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize={normalize(25)}>Done Reading</Text>
          <TouchableOpacity flexDirection="row" alignItems="center">
            <Text fontSize={normalize(12)}>See All</Text>
            <Icon name="ChevronRight" size={4} />
          </TouchableOpacity>
        </Box>
      </Box>
    </Container>
  );
}
