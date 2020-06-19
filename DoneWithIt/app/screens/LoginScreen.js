import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "./../components/Screen";
import AppTextInput from "./../components/AppTextInput";
import AppButton from "./../components/AppButton";

function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
        onChangeText={(text) => setEmail(text)}
        icon="email"
        placeholder="Email"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setPassword(text)}
        icon="lock"
        secureTextEntry={true}
        placeholder="Password"
        textContentType="password"
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    margingTop: 80,
    marginBottom: 20,
  },
});

export default LoginScreen;
