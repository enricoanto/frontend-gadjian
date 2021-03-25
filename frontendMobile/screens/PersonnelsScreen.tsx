import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import PersonnelBox from "../components/PersonnelBox";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import Axios from "axios";

export default () => {
  const state = useSelector((state: RootStateOrAny) => state);
  const dispatch = useDispatch();
  const [apapun, setapa] = useState('')
  useEffect(() => {
    const fetchPersonnels = () => {
      Axios.get("https://randomuser.me/api/?results=28")
        .then(({ data }) => {
          dispatch({
            type: "SET_PERSONNELS",
            payload: data.results,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchPersonnels();
  }, []);

  const lasPage = Math.ceil(
    state.Personnels.Personnels.length / state.Personnels.PersonnelsPerPage
  );
  const indexOfLastPersonnel =
    state.Page.CurrentPage * state.Personnels.PersonnelsPerPage;
  const indexOfFirstPersonnel =
    indexOfLastPersonnel - state.Personnels.PersonnelsPerPage;
  const currentPersonnels = state.Personnels.Personnels.slice(
    indexOfFirstPersonnel,
    indexOfLastPersonnel
  );
  const goingDown = () => {
    if (state.Page.CurrentPage === 2) {
      dispatch({
        type: "SET_CURRENT_PAGE",
        payload: state.Page.CurrentPage - 1,
      });
      dispatch({
        type: "SET_PREVIOUS_PAGE",
        payload: true,
      });
    } else {
      dispatch({
        type: "SET_NEXT_PAGE",
        payload: false,
      });
      dispatch({
        type: "SET_CURRENT_PAGE",
        payload: state.Page.CurrentPage - 1,
      });
    }
  };
  const goingUp = () => {
    if (state.Page.CurrentPage === lasPage - 1) {
      dispatch({
        type: "SET_CURRENT_PAGE",
        payload: state.Page.CurrentPage + 1,
      });
      dispatch({
        type: "SET_NEXT_PAGE",
        payload: true,
      });
    } else {
      dispatch({
        type: "SET_PREVIOUS_PAGE",
        payload: false,
      });
      dispatch({
        type: "SET_CURRENT_PAGE",
        payload: state.Page.CurrentPage + 1,
      });
    }
  };
  const inputPersonnel = (value:any)=> {
    dispatch({
      type: "SET_SEARCH_PERSONNEL",
      payload: value,
    });
  }
  const findPersonnel = ()=> {
    let result = state.Personnels.Personnels.filter((el:any)=>{
      return (el.name.first.toLowerCase() === state.Personnels.SearchPersonnel.toLowerCase())
    })
    console.log(result)
    dispatch({
      type: "SET_FIND_PERSONNEL",
      payload: result
    })
  }
 
  return (
    <View style={styles.screen}>
      <View style={styles.personnelsScreen}>
        <View style={styles.center}>
          <Text style={styles.textTitle}>PERSONNELS LIST</Text>
          <Text style={styles.textSubTitle}>List of all personnels</Text>
          <TextInput style={styles.searchPersonnelsForm} onChangeText={(value)=> inputPersonnel(value)} onSubmitEditing={()=> findPersonnel()}></TextInput>
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
      <ScrollView style={{ marginBottom: 20 }}>
        {currentPersonnels.map((personnel: any) => (
          <PersonnelBox key={personnel.login.uuid} personnel={personnel} />
        ))}
      </ScrollView>
      <View style={styles.buttonPage}>
        <TouchableOpacity
          style={styles.button}
          disabled={state.Page.PreviousPage}
          onPress={goingDown}
        >
          <Text
            style={
              state.Page.PreviousPage
                ? { color: "gray" }
                : { color: "black" }
            }
          >
            <AntDesign name="left" size={19} />
            <Text style={{ marginTop: 1 }}>Previous</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          disabled={state.Page.NextPage}
          onPress={goingUp}
        >
          <Text
            style={
              state.Page.NextPage
                ? { color: "gray" }
                : { color: "black" }
            }
          >
            <Text style={{ marginTop: 1 }}>Next</Text>
            <AntDesign name="right" size={19} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    height: 670,
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
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: "row",
  },
});
