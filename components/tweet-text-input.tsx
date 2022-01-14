import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export function TweetTextInput() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tweet Text Input</Text>
      <TextInput
        style={styles.input}
        defaultValue={text}
        onChangeText={(val) => setText(val)}
        placeholder="whats happening"
      />
      <Text
        style={
          text.length > 280
            ? styles.red
            : text.length < 270
            ? styles.blue
            : styles.yellow
        }
      >
        <Text style={styles.bold}>
          {280 - text.length} characters remaining
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  input: {
    borderWidth: 2,
    margin: 2,
    marginTop: 15,
    padding: 14,
    borderRadius: 6,
    fontSize: 18,
    height: 80,
  },
  red: {
    color: "#f87171",
  },
  yellow: {
    color: "#fbbf24",
  },
  blue: {
    color: "#38bdf8",
  },
  bold: {
    fontSize: 20,
    fontWeight: "600",
  },
});
