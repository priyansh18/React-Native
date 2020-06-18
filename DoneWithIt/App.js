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

export default function App() {
  return (
    <Screen>
      {/* <Icon name="email" size={50} backgroundColor="red" iconColor="white" /> */}
      <ListItem title="My Title" subTitle="My SubTitle" ImageComponent={<Icon name="email" />} />
    </Screen>
  );
}
