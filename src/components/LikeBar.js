import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const LikeBar=()=>{
  return(
    <View style={styles.container}>
      <Image source={{uri:"https://picsum.photos/id/1006/20"}} style={styles.firstImage}/>
      <Image source={{uri:"https://picsum.photos/id/101/20"}} style={styles.image}/>
      <Image source={{uri:"https://picsum.photos/id/1005/20"}} style={styles.image}/>
      <Text style={styles.text}>Liked by </Text>
      <Text style={styles.boldText}>mehmet06 </Text>
      <Text style={{color: "black"}}>and </Text>
      <Text style={styles.boldText}>others</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    width: "100%",
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  firstImage:{
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  image:{
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: -5
  },
  text:{
    marginLeft: 5,
    color: "black"
  },
  boldText:{
    fontWeight: "bold",
    color: "black"
  }
});

export default LikeBar;