import { React } from "react";
import { StyleSheet, View, Text } from "react-native";

const Quote = ({ content, author }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.author}>- {author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 10,
    padding: 10,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2.8,
  },
  content: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    marginVertical: 8,
    padding: 8,
  },
  author: {
    fontSize: 20,
    margin: 16,
    textAlign: "right",
  },
});

export default Quote;
