import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Story from "./Story";

const Stories=()=>{
  return(
    <View style={styles.container}>
      <ScrollView horizontal={true} scrollEnabled={true} bounces={false} overScrollMode="never">
        <Story image="https://picsum.photos/id/1005/64" userName="Hikayen" />
        <Story image="https://picsum.photos/id/1006/64" userName="mehmet06" />
        <Story image="https://picsum.photos/id/1009/64" userName="cloryfield" />
        <Story image="https://picsum.photos/id/101/64" userName="neşe78" />
        <Story image="https://picsum.photos/id/1010/64" userName="patika.dev" />
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