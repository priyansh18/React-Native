import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/welcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return (
    <Screen>
      <AccountScreen/>
    </Screen>
  );
}
