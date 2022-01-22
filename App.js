import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";

import Screen from "./app/components/Screen";

export default function App() {
  const requestPermission = async () => {
    /* 
      This is how we can use the Permissions API instead of the request method
      we can ask for multiple permissions at the same time
      result.granted is true if and only if every permissions has been granted
      
      const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.LOCATION_BACKGROUND)
      result.granted;
    */

    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}
