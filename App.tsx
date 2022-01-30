import { NativeBaseProvider } from "native-base";
import React from "react";
import { Navigation } from "./navigation";

const App = () => {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
};

export default App;
