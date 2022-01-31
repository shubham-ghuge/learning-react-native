import React from "react";
import { FlatList } from "native-base";
import Card from "./components/card";
import data from "./data";

export default function FlatLists() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Card data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
