import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>
        Hello Priyansh Singhal!-A really really long text to check how text
        works{" "}
      </Text>
      <TouchableWithoutFeedback onPress={() => console.log("Image Tapped")}>
        <Image
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
