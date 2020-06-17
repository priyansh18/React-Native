import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import ListItem from "./ListItem";

function ListingDetailsScreen(params) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for Sale</AppText>
        <AppText style={styles.price}>Rs.500</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/priyansh.jpg")}
            title="Priyansh Singhal"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginLeft: 10,
    marginTop: 20,
  },
});

export default ListingDetailsScreen;
