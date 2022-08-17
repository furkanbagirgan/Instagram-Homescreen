import React from "react";
import { View, Image, StyleSheet } from "react-native";
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
});

export default Post;