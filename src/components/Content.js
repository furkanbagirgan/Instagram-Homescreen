import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Stories from "./Stories";
import Post from "./Post";

const Content=()=>{
  return(
    <View style={styles.container}>
      <ScrollView scrollEnabled={true} bounces={false} >
        <Stories />
        <Post image="https://picsum.photos/id/1015/700" userName="furkanbrgn" userImage="https://picsum.photos/id/1005/30" postDescription="Dağ, manzara :)" />
        <Post image="https://picsum.photos/id/1016/700" userName="cloryfield" userImage="https://picsum.photos/id/1009/30" postDescription="Sıcaklık fazla fakat görüntü süper" />
        <Post image="https://picsum.photos/id/1021/700" userName="patika.dev" userImage="https://picsum.photos/id/1010/30" postDescription="Ormana sis çökmüş" />
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Content;