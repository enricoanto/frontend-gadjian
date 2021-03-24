import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Octicons, Entypo } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";


export default (props:any) => {
  return (
    <View style={styles.box}>
      <View style={styles.headerBox}>
        <Text style={styles.titleBox}>Personnel ID: {props.personnel.id.value}</Text>
        <Entypo
          style={styles.icons}
          name="dots-three-horizontal"
          size={24}
          color="black"
        />
      </View>
      <View style={styles.idBox}>
        <Avatar
        size='large'
          rounded
          source={{
            uri:props.personnel.picture.medium,
          }}
        />
        <View style={styles.id}>
          <View>
            <Text style={styles.fontTitle}>Name:</Text>
            <Text style={styles.fontChild}>{props.personnel.name.first} {props.personnel.name.last}</Text>
          </View>
            <Text style={styles.fontTitle}>Telephone:</Text>
            <Text style={styles.fontChild}>{props.personnel.phone}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 15,
    backgroundColor: "white",
    borderRadius: 5,
  },
  headerBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: '#e4e4e4'
  },
  titleBox: {
    fontSize: 15,
    marginLeft: 10,
  },
  icons: {
    marginRight: 10,
  },
  idBox : {
    margin: 15,
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  id: {
      flex: 1,
      marginLeft: 20
  },
  fontTitle: {
      fontSize: 15,
      fontWeight: 'bold'
  },
  fontChild: {
      fontSize: 15,
      marginBottom: 10
  }
});
