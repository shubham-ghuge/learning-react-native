import axios from "axios";
import { FlatList, NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import { ServerProductResponse } from "./cart/types";
import Contacts from "./flatlists";
import Card from "./flatlists/components/card";
import data from "./flatlists/data";
import { Navigation } from "./navigation";

const App = () => {
  async function fetchData() {
    try {
      const { data } = await axios.get<ServerProductResponse>(
        "https://farmers-grocery-v2.herokuapp.com/products"
      );
      console.debug(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
};

export default App;
