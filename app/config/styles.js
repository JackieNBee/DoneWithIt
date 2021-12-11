import { Platform } from "react-native";

import colors from "./colors";

// Default styles to improve code reusability

export default {
  colors, // we make the color palette accessible when importing the default styles
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
