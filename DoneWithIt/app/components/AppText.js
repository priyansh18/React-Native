import React from "react";
import defaultStyles from "../config/styles";
import { Text } from "react-native";

function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
