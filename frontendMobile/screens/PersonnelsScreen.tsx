import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import PersonnelBox from "../components/PersonnelBox";
import Axios from "axios";

export default () => {
  const [personnels, setPersonnels] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [personnelsPerPage, setPersonnelsPerPage] = useState(4);
  useEffect(() => {
    const fetchPersonnels = async () => {
      try {
        const { data } = await Axios.get(
          "https://randomuser.me/api/?results=28"
        );
        setPersonnels(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPersonnels();
  }, []);
  const lasPage = Math.ceil(personnels.length / personnelsPerPage);
  const indexOfLastPersonnel = currentPage * personnelsPerPage;
  const indexOfFirstPersonnel = indexOfLastPersonnel - personnelsPerPage;
  const currentPersonnels = personnels.slice(
    indexOfFirstPersonnel,
    indexOfLastPersonnel
  );

  return (
    <View style={styles.screen}>
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
      <ScrollView style={{marginBottom: 20}}>
        {currentPersonnels.map((personnel: any) => (
            <PersonnelBox key={personnel.login.uuid} personnel={personnel} />
            ))}
      </ScrollView>
      <View style={styles.buttonPage}>
      <AntDesign name="left" size={24} color="black" />
      <Text>Previous</Text>
      <Text>Next</Text>
      <AntDesign name="right" size={24} color="black" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    height:670
  },
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
  buttonPage: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
    paddingHorizontal:20
  }
});
