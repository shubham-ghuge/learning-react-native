import CartContextProvider from "./contexts";
import React from "react";
import { Text } from "native-base";

export default function Cart() {
  return (
    <CartContextProvider>
      <Text>Hello</Text>
    </CartContextProvider>
  );
}
