import React,{useEffect} from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import CardPersonnel from '../components/CardPersonnel'
import {screens} from '../type'

export default () => {

  return (
    <View>
      <View style={styles.personnelsScreen}>
        <View style={styles.center}>
          <Text style={styles.textTitle}>PERSONNELS LIST</Text>
          <Text style={styles.textSubTitle}>List of all personnels</Text>
          <TextInput style={styles.searchPersonnelsForm}></TextInput>
          <View style={styles.addPersonnelButton}>
            <Text style={styles.addPersonnel}>Add Personnel </Text>
            <Text style={styles.icon}>
              <MaterialCommunityIcons
                name="plus-thick"
                size={30}
                color="white"
              />
            </Text>
          </View>
        </View>
      </View>
      <CardPersonnel></CardPersonnel>
    </View>
  );
};
const styles = StyleSheet.create({
  personnelsScreen: {
    margin: 15,
    backgroundColor: "white",
  },
  center: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 27,
    marginTop: 10,
  },
  textTitle: {
    color: "#19c1c0",
    fontSize: 30,
    fontWeight: "bold",
  },
  textSubTitle: {
    fontSize: 25,
  },
  searchPersonnelsForm: {
    height: 40,
    width: 260,
    marginBottom: 12,
    borderWidth: 1,
    paddingHorizontal: 5,
    backgroundColor: "white",
  },
  addPersonnel: {
    fontSize: 30,
    color: "white",
  },
  addPersonnelButton: {
    paddingHorizontal: 5,
    height: 40,
    justifyContent: "space-between",
    width: 260,
    backgroundColor: "#19c1c0",
    flexDirection: "row",
    color: "white",
    marginBottom: 20,
  },
  icon: {
    marginTop: 4,
  },
});
