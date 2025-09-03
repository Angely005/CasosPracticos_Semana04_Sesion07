import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function TrafficLight() {
  const [color, setColor] = useState("red");

  const getMessage = () => {
    if (color === "green") return "¡Avanza!";
    if (color === "red") return "¡Detente!";
    return "Precaución...";
  };

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: color,
          marginBottom: 20,
        }}
      />
      <Text style={{ marginBottom: 10 }}>{getMessage()}</Text>
      <Button title="Rojo" onPress={() => setColor("red")} />
      <Button title="Amarillo" onPress={() => setColor("yellow")} />
      <Button title="Verde" onPress={() => setColor("green")} />
    </View>
  );
}
