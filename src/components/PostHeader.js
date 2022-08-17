import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PostHeader=({userName,userImage})=>{
  return(
    <View style={styles.header}>
        <View style={styles.userWrapper}>
          <View style={styles.userImageWrapper}>
            <Image source={{uri:userImage}} style={styles.userImage}/>
          </View>
          <Text style={styles.userName}>{userName}</Text>
        </View>
        <Icon name="dots-horizontal" size={20} color="black"/>
      </View>
  )
}

const styles=StyleSheet.create({
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
});

export default PostHeader;