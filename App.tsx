import { NativeBaseProvider } from "native-base";
import React from "react";
import CartContextProvider from "./cart/contexts";
import { Navigation } from "./navigation";

const App = () => {
  return (
    <NativeBaseProvider>
      <CartContextProvider>
        <Navigation />
      </CartContextProvider>
    </NativeBaseProvider>
  );
};

export default App;
