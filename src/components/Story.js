import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Story=({image,username})=>{
  return(
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{uri:image}} style={styles.image}/>
      </View>
      <Text style={styles.name}>{username}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    width: 64,
    height: 80,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 10
  },
  imageWrapper:{
    width: "100%",
    height: 64,
    borderRadius: 32,
    backgroundColor: "purple",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  image:{
    width: 58,
    height: 58,
    borderRadius: 29
  },
  name:{
    color: "black",
    fontSize: 12
  }
});

export default Story;