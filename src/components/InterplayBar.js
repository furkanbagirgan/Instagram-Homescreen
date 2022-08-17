import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InterplayBar=()=>{
  return(
    <View style={styles.container}>
      <View style={styles.leftIcons}>
        <Icon name="cards-heart-outline" size={25} color="black" />
        <Icon name="chat-outline" size={28} color="black" />
        <Icon name="send-circle-outline" size={28} color="black" />
      </View>
      <View style={styles.rightIcons}>
        <Icon name="bookmark-outline" size={25} color="black" />
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  leftIcons:{
    width: 110,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightIcons:{
    width: 40,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default InterplayBar;