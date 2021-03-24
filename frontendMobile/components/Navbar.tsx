import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Avatar } from 'react-native-elements';

export default () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.subNavbar}>
        <Octicons name="three-bars" size={30} color="black" />
        <Image
          style={styles.logo}
          source={{
            uri:
              "https://www.zahironline.com/wp-content/uploads/2016/09/gadjian-logo-zahir-online-337x150.png",
          }}
        />
      </View>
      <Avatar
  rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    marginTop: 60,
    justifyContent: 'space-between',
    flexDirection: "row",
    width: 350,
  },
  subNavbar: {
    flexDirection: "row",
  },
  logo: {
    width: 90,
    height: 40,
    marginLeft: 10,
    marginTop: -10
  },
});
