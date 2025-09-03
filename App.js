import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import DoubleNumber from "./Components/DoubleNumber";
import TrafficLight from "./Components/TrafficLight";
import UpperCaseConverter from "./Components/UpperCaseConverter";
import QuickSurvey from "./Components/QuickSurvey";

export default function App() {
  const [screen, setScreen] = useState("menu");

  const renderScreen = () => {
    switch (screen) {
      case "double":
        return <DoubleNumber />;
      case "traffic":
        return <TrafficLight />;
      case "upper":
        return <UpperCaseConverter />;
      case "survey":
        return <QuickSurvey />;
      default:
        return (
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>Casos prácticos</Text>
            <Button title="1) Calculadora de doble" onPress={() => setScreen("double")} />
            <Button title="2) Semáforo interactivo" onPress={() => setScreen("traffic")} />
            <Button title="3) Conversor de mayúsculas" onPress={() => setScreen("upper")} />
            <Button title="4) Encuesta rápida" onPress={() => setScreen("survey")} />
          </View>
        );
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {screen !== "menu" && (
        <Button title="← Volver al menú" onPress={() => setScreen("menu")} />
      )}
      {renderScreen()}
    </View>
  );
}
