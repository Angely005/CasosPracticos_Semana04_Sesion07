import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export default function DoubleNumber() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const raw = number.trim();
    if (raw === "") {
      Alert.alert("Error", "Por favor ingresa un número");
      setResult(null);
      return;
    }

    const normalized = raw.replace(",", ".");
    const value = Number(normalized);

    if (Number.isNaN(value)) {
      Alert.alert("Error", "Ingresa un valor numérico válido");
      setResult(null);
      return;
    }

    setResult(value * 2);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Ingresa un número:</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 8,
          marginVertical: 10,
          borderRadius: 4,
        }}
        placeholder="Ej: 12.5 o 12,5"
        keyboardType="decimal-pad"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Calcular" onPress={handleCalculate} />
      {result !== null && (
        <Text style={{ marginTop: 12, fontSize: 16 }}>Resultado: {result}</Text>
      )}
    </View>
  );
}
