import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida quis blandit turpis cursus. Nulla facilisi nullam vehicula ipsum a arcu. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Ac ut consequat semper viverra nam libero justo laoreet. Aliquet porttitor lacus luctus accumsan tortor posuere ac. At imperdiet dui accumsan sit amet nulla. Ornare lectus sit amet est placerat. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Egestas egestas fringilla phasellus faucibus. In arcu cursus euismod quis viverra nibh. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Pretium lectus quam id leo in. Ut tristique et egestas quis ipsum suspendisse. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Dictum non consectetur a erat nam at.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida quis blandit turpis cursus. Nulla facilisi nullam vehicula ipsum a arcu. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Ac ut consequat semper viverra nam libero justo laoreet. Aliquet porttitor lacus luctus accumsan tortor posuere ac. At imperdiet dui accumsan sit amet nulla. Ornare lectus sit amet est placerat. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Egestas egestas fringilla phasellus faucibus. In arcu cursus euismod quis viverra nibh. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Pretium lectus quam id leo in. Ut tristique et egestas quis ipsum suspendisse. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Dictum non consectetur a erat nam at.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
    // or ...
    // setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            showChevron={true}
          />
        )}
        // to add a separator between items without one at the bottom
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
