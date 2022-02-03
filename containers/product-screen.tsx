import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";
import { FlatList } from "native-base";
import Card from "../cart/components/card";
import { ServerProductResponse } from "../cart/types";
import axios from "axios";
import { useCartContext } from "../cart/contexts";

type props = NativeStackScreenProps<RootStackParamList, "Products">;

export default function ProductScreen({ navigation }: props) {
  const {
    state: { products },
    dispatch,
  } = useCartContext();

  async function fetchData() {
    try {
      const { data } = await axios.get<ServerProductResponse>(
        "https://farmers-grocery-v2.herokuapp.com/products"
      );
      dispatch({ type: "SET_PRODUCTS", payload: { data: data.response } });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {products.length !== 0 && (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            // <Flex direction="row" flexWrap={"wrap"} justifyContent={"center"}>
            <Card data={item} />
            // </Flex>
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </>
  );
}
