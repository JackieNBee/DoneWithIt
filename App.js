import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
} from "react-native";

import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  const handlePress = () => {
    console.log("Text pressed");
  };

  const { landscape } = useDeviceOrientation();

  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
