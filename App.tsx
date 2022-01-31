import { FlatList, NativeBaseProvider } from "native-base";
import React from "react";
import Contacts from "./flatlists";
import Card from "./flatlists/components/card";
import data from "./flatlists/data";
import { Navigation } from "./navigation";

const App = () => {
  return (
    <NativeBaseProvider>
      <Contacts />
    </NativeBaseProvider>
  );
};

export default App;
