import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import HeadBar from "./components/HeadBar";
import Content from "./components/Content";

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <HeadBar />
      <Content />
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