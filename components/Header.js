import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

const Header = (props) => {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "Shopping List",
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "#b2b2ff",
  },
  text: {
    color: "#000019",
    fontSize: 20,
  },
});

export default Header;
