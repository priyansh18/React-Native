import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "./../components/Screen";
import { Formik } from "formik";
import AppText from "../components/AppText";
import AppButton from "./../components/AppButton";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "./../components/AppFormField";

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
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
              name="email"
              icon="email"
              placeholder="Email"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              secureTextEntry={true}
              placeholder="Password"
              textContentType="password"
            />
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
