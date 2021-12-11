import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

// <SafeAreaView> doesn't support horizontal padding (paddingLeft - paddingRight)
// so in order to have that space we're going to apply the style also to an inner <View>

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // I cannot use && approach... that's strange
    // other approach
    paddingTop: Constants.statusBarHeight, // doesn't affect SafeAreaView on Apple Devices -> no extra padding
    flex: 1,
  },
});

export default Screen;
