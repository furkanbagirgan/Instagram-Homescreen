import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import HeadBar from "./components/HeadBar";

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <HeadBar />
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