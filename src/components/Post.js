import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import PostHeader from "./PostHeader";
import InterplayBar from "./InterplayBar";
import LikeBar from "./LikeBar";

const Post=({image,userName,userImage,postDescription})=>{
  return(
    <View style={styles.container}>
      <PostHeader userName={userName} userImage={userImage} />
      <View style={styles.imageWrapper}>
        <Image source={{uri:image}} style={styles.image}/>
      </View>
      <InterplayBar />
      <LikeBar />
      <View style={styles.description}>
        <Text style={{color:"black",fontWeight:"bold"}}>{userName+" "}</Text>
        <Text style={{color:"black"}}>{postDescription}</Text>
      </View>
      <Text style={{color:"gray",fontSize:12,marginLeft:10,marginBottom:10}}>1 hour ago</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    width: "100%",
  },
  imageWrapper:{
    width: "100%",
  },
  image:{
    width: "100%",
    height: 300,
  },
  description:{
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 10
  }
});

export default Post;