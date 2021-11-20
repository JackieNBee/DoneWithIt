import React from "react";
import { Image, View, StyleSheet } from "react-native";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton} />
      <View style={styles.deleteButton} />
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteButton: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
