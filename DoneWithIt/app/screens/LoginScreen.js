import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "./../components/Screen";
import { Formik } from "formik";
import AppTextInput from "./../components/AppTextInput";
import AppText from "../components/AppText";
import AppButton from "./../components/AppButton";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit,errors }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
              onChangeText={handleChange("email")}
              icon="email"
              placeholder="Email"
            />
            <AppText style={{color:"red"}}>{errors.email}</AppText>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("password")}
              icon="lock"
              secureTextEntry={true}
              placeholder="Password"
              textContentType="password"
            />
            <AppText style={{color:"red"}}>{errors.password}</AppText>
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
