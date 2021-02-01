import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  Alert,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import AddItem from "./components/AddItem";

import Header from "./components/Header";
import ListItem from "./components/ListItem";

const App = () => {
  const [items, setItems] = useState([]);

  const handleOnRemovePress = (item) => {
    setItems((prevState) => {
      return prevState.filter((elem) => elem.id != item.id);
    });
  };

  const handleAddItem = (text) => {
    setItems((prevState) => {
      return [...prevState, { id: Date.now().toString(), text }];
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem onAddItem={handleAddItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            items={items}
            setItems={setItems}
            onRemovePress={handleOnRemovePress}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
