import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../containers/home-screen";
import { DetailScreen } from "../containers/detail-screen";
import ProductScreen from "../containers/product-screen";
import CartScreen from "../containers/cart-screen";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Products: undefined;
  Cart: undefined;
};

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Products" component={ProductScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
