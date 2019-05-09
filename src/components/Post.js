import React from "react";
import PropTypes from "prop-types";

import { StyleSheet, Text, View } from "react-native";
import { bold } from "ansi-colors";

const Post = props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.author}>{props.author}</Text>
    </View>
    <View>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // margin: 10,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    padding: 20
  },

  title: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 16
  },

  author: {
    fontSize: 10,
    marginBottom: 5
  },

  header: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10
  }
});

export default Post;
