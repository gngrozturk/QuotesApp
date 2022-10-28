import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 190,
    height: 65,
    backgroundColor: "#ffdc0d",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2.8,
  },
  title: {
    color: "#131313",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Button;
