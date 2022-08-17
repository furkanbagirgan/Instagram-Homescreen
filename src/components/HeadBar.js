import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HeadBar=()=>{
  return(
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={require('./img/logo.png')} style={styles.logo}/>
      </View>
      <View style={styles.icons}>
        <Icon name="plus-circle-outline" size={25} color="black" />
        <Icon name="cards-heart-outline" size={25} color="black" />
        <Icon name="chat-processing-outline" size={28} color="black" />
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoWrapper: {
    width: "40%",
    height: "75%",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  icons:{
    width: "30%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default HeadBar;