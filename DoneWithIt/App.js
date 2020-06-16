import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function App() {
  const handlePress=()=>{
    console.log("Text clicked")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello Priyansh Singhal!-A really really long text to check how text works  </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0",
  },
});
