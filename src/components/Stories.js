import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const Stories=()=>{
  return(
    <ScrollView horizontal={true} style={styles.container}>
      
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    padding: 15,
  },
});

export default Stories;