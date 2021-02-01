import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddItem = (props) => {
  const { onAddItem } = props;
  const [text, setText] = useState("");

  const onSubmit = () => {
    onAddItem(text);
    setText("");
  };

  const onInputChange = (inputValue) => setText(inputValue);
  return (
    <View>
      <TextInput
        placeholder="Add item..."
        style={styles.input}
        onChangeText={onInputChange}
        value={text}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.btn}>
        <Text style={styles.btnText}>Add item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "#000019",
    fontSize: 20,
    textAlign: "center",
  },
});

export default AddItem;
