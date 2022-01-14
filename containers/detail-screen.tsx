import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation";

type props = NativeStackScreenProps<RootStackParamList, "Details">;

export function DetailScreen({ navigation }: props) {
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        This is Details Screen
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
