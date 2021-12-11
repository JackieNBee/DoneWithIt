import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor, // modern js syntax: if key and value are the same just put the key
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        color={iconColor}
        // the actaul icon is half the size of the circular container
        size={size * 0.5}
      />
    </View>
  );
}

export default Icon;
