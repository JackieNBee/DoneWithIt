import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ image, title, subTitle, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        // put a custom highlight color since the default one is too dark
        underlayColor={colors.light}
        // touchable highlight works only if we define onPress
        onPress={onPress}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35, // to make it round must be half of width and height, cannot put "50%" like in CSS
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
