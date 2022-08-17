import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const Posts=()=>{
  return(
    <View style={styles.container}>
      <ScrollView scrollEnabled={true} bounces={false} overScrollMode="never">
        
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "gray"
  },
});

export default Posts;