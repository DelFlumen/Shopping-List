import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Button } from "react-native";

const ListItem = (props) => {
  const { item, onRemovePress } = props;

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Button
          onPress={() => onRemovePress(item)}
          title="remove"
          size={20}
          color="#b2b2ff"
        />
      </View>
    </TouchableOpacity>
  );
};

ListItem.defaultProps = {
  title: "Shopping List",
};

const styles = StyleSheet.create({
  listItem: {
    height: 60,
    padding: 15,
    backgroundColor: "#F8F8F8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
