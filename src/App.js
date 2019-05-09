import React, { Component } from "react";
import { Platform, Text, StyleSheet, View, ScrollView } from "react-native";

import "~/config/ReactotronConfig";
import "~/config/DevToolsConfig";

import Post from "~/components/Post";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Aprendendo React Native",
        author: "João Pedro",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut incidunt error ducimus nihil labore porro assumenda sapiente? Eum eveniet blanditiis corporis, incidunt eaque dignissimos cupiditate laborum quam quisquam iure!"
      },
      {
        id: 2,
        title: "Aprendendo React Native",
        author: "João Pedro",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut incidunt error ducimus nihil labore porro assumenda sapiente? Eum eveniet blanditiis corporis, incidunt eaque dignissimos cupiditate laborum quam quisquam iure!"
      },
      {
        id: 3,
        title: "Aprendendo React Native",
        author: "João Pedro",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut incidunt error ducimus nihil labore porro assumenda sapiente? Eum eveniet blanditiis corporis, incidunt eaque dignissimos cupiditate laborum quam quisquam iure!"
      },
      {
        id: 4,
        title: "Aprendendo React Native",
        author: "João Pedro",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut incidunt error ducimus nihil labore porro assumenda sapiente? Eum eveniet blanditiis corporis, incidunt eaque dignissimos cupiditate laborum quam quisquam iure!"
      },
      {
        id: 5,
        title: "Aprendendo React Native",
        author: "João Pedro",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut incidunt error ducimus nihil labore porro assumenda sapiente? Eum eveniet blanditiis corporis, incidunt eaque dignissimos cupiditate laborum quam quisquam iure!"
      },
      {
        id: 6,
        title: "Aprendendo React Native",
        author: "João Pedro",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut incidunt error ducimus nihil labore porro assumenda sapiente? Eum eveniet blanditiis corporis, incidunt eaque dignissimos cupiditate laborum quam quisquam iure!"
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>GoNative App</Text>
        </View>
        <ScrollView>
          {this.state.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              description={post.description}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e77"
  },
  header: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    // Dica do Diego -->
    // No iOS precisamos aplicar 20px de padding superior
    // já que a Status Bar não joga o conteúdo do App
    // pra baixo automaticamente
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20
      },
      android: {
        height: 56,
        paddingTop: 0
      }
    })
  },

  headerTitle: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold"
  }
});
