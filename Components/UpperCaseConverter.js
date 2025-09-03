import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function UpperCaseConverter() {
  const [text, setText] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text>Escribe un texto:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 5, marginVertical: 10 }}
        value={text}
        onChangeText={setText}
      />
      <Text>En mayúsculas: {text.toUpperCase()}</Text>
    </View>
  );
}
