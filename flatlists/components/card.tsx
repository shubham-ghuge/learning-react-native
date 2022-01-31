import { Avatar, Box, HStack, Spacer, VStack, Text } from "native-base";
import { DataType } from "../types";
import React from "react";

export default function Card({
  data: { avatarUrl, fullName, recentText, timeStamp },
}: {
  data: DataType;
}) {
  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: "gray.600",
      }}
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2"
    >
      <HStack space={3} justifyContent="space-between">
        <Avatar
          size="48px"
          source={{
            uri: avatarUrl,
          }}
        />
        <VStack>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            color="coolGray.800"
            bold
          >
            {fullName}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            {recentText}
          </Text>
        </VStack>
        <Spacer />
        <Text
          fontSize="xs"
          _dark={{
            color: "warmGray.50",
          }}
          color="coolGray.800"
          alignSelf="flex-start"
        >
          {timeStamp}
        </Text>
      </HStack>
    </Box>
  );
}
