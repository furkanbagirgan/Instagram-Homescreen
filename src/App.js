import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import HeadBar from "./components/HeadBar";
import Posts from "./components/Posts";
import Stories from "./components/Stories";

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <HeadBar />
      <Stories />
      <Posts />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;