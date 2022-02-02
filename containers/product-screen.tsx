import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";
import { View } from "react-native";
import { Box, Button, Text } from "native-base";

type props = NativeStackScreenProps<RootStackParamList, "Products">;

export default function ProductScreen({ navigation }: props) {
  return (
    <Box>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        This is Home Screen
      </Text>
      <Button onPress={() => navigation.navigate("Details")}>products</Button>
    </Box>
  );
}
