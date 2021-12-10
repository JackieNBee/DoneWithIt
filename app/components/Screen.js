import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // I cannot use && approach... that's strange
    // other approach
    paddingTop: Constants.statusBarHeight, // doesn't affect SafeAreaView on Apple Devices -> no extra padding
  },
});

export default Screen;
