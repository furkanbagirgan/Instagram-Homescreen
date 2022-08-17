import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Post=({image,userName,userImage,postDescription})=>{
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userWrapper}>
          <View style={styles.userImageWrapper}>
            <Image source={{uri:userImage}} style={styles.userImage}/>
          </View>
          <Text style={styles.userName}>{userName}</Text>
        </View>
        <Icon name="dots-horizontal" size={20} color="black"/>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={{uri:image}} style={styles.image}/>
      </View>
      
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
  header:{
    width: "100%",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  userWrapper:{
    flexDirection: "row",
    alignItems: "center"
  },
  userImage:{
    width: 30,
    height: 30,
    borderRadius: 15
  },
  userName:{
    fontSize: 14,
    color: "black",
    marginLeft: 5
  },
  details:{
    fontSize: 16,
    color: "black",
    fontWeight: "bold"
  }
});

export default Post;