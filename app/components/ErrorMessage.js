import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";

function ErrorMessage({ error, visible }) {
  // render the component only when it can be visible and there is an error to show
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
