import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function QuickSurvey() {
  const [answer, setAnswer] = useState(null);

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={{ marginBottom: 10 }}>¿Te gusta React Native?</Text>
      <Button title="Sí" onPress={() => setAnswer("Sí")} />
      <Button title="No" onPress={() => setAnswer("No")} />
      {answer && <Text style={{ marginTop: 10 }}>Elegiste: {answer}</Text>}
      {answer && <Button title="Resetear" onPress={() => setAnswer(null)} />}
    </View>
  );
}
