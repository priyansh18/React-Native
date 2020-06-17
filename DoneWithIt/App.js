import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/welcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 50,
      }}
    >
      <Card title="Red jacket for sale" subTitle="Rs.500" image={require("./app/assets/jacket.jpg")} />
    </View>
  );
}
