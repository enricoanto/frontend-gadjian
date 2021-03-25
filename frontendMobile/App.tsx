import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Personnels from "./screens/PersonnelsScreen"
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Navbar />
      <View style={styles.screen}>
        <Personnels/>
      </View>

      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  screen: {
    marginTop: 10,
    backgroundColor: '#e4e4e4',
    width: 350
  }
});
