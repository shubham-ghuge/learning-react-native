import React from "react";
import { Button, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";

type props = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: props) {
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        This is Home Screen
      </Text>
      <Button
        title="Check Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
