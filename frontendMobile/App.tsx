import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import Personnels from "./screens/PersonnelsScreen"

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.screen}>
        <Personnels/>
      </View>
      <StatusBar style="auto" />
    </View>
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
