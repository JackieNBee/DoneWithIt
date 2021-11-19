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

export default function App() {
  const handlePress = () => {
    console.log("Text pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Open up App.js to start working on your app!
      </Text>
      {/* <Image source={require("./assets/favicon.png")} /> */}
      <TouchableOpacity>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <Button
        color="orange"
        title="Click me"
        // SIMPLE ALERT
        // onPress={() => alert("Lol nabbo")}
        // CUSTOM ALERT-alert
        onPress={() =>
          Alert.alert("Custom title", "Custom message", [
            { text: "Yes", onPress: () => console.log("You tapped Yes") },
            { text: "No", onPress: () => console.log("You tapped No") },
          ])
        }
        // CUSTOM ALERT-prompt -- doesn't work on Android
        // onPress={() =>
        //   Alert.prompt("This is a prompt", "Insert a value", (text) =>
        //     console.log(text)
        //   )
        // }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
