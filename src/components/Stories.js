import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Story from "./Story";

const Stories=()=>{
  return(
    <View style={styles.container}>
      <ScrollView horizontal={true} scrollEnabled={true} bounces={false} overScrollMode="never">
        <Story image="https://picsum.photos/id/1005/64" username="Hikayen" />
        <Story image="https://picsum.photos/id/1006/64" username="mehmet06" />
        <Story image="https://picsum.photos/id/1009/64" username="cloryfield" />
        <Story image="https://picsum.photos/id/101/64" username="neşe78" />
        <Story image="https://picsum.photos/id/1010/64" username="patika.dev" />
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    paddingVertical: 10,
  },
});

export default Stories;