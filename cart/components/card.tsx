import {
  AspectRatio,
  Box,
  Heading,
  Stack,
  Text,
  Image,
  Button,
} from "native-base";
import React from "react";
import { useCartContext } from "../contexts";
import { ProductData } from "../types";

export default function Card({ data }: { data: ProductData }) {
  const { dispatch } = useCartContext();
  function addToCartHandler() {
    return dispatch({
      type: "ADD_TO_CART",
      payload: { productID: data._id, quantity: 0 },
    });
  }

  return (
    <Box alignItems="center">
      <Box
        maxW="48"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        ml={"1"}
        mb="2"
        borderWidth="1"
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={4 / 3}>
            <Image
              source={{
                uri: data.imgUrl,
              }}
              alt="image"
            />
          </AspectRatio>
          <Text
            color="warmGray.50"
            bg="violet.500"
            fontWeight="700"
            fontSize="xs"
            position="absolute"
            bottom="0"
            px="4"
            width="20"
            py="1.5"
          >
            {data.discount}% off
          </Text>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {data.name}
            </Heading>
          </Stack>
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="400"
          >
            INR: {Math.round(data.price)}.00
          </Text>
          <Button
            onPress={() => addToCartHandler()}
            alignSelf={"center"}
            colorScheme="tertiary"
          >
            {data.isInCart ? "Go To Cart" : "Add to cart"}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
