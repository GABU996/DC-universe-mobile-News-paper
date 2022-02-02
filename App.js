import { StyleSheet, Text, ScrollView, View, StatusBar } from "react-native";
import React from "react";
import Header from "./components/Header";
import Date from "./components/Date";
import FirstNews from "./components/FirstNews";
import SecondNews from "./components/SecondNews";
import ThirdNews from "./components/ThirdNews";
import Hirins from "./components/Hirins";
import FourthNew from "./components/fourthNew";
import Ender from "./components/Ender";
const App = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Header />
        <Date />
        <FirstNews />
        <SecondNews />
        <ThirdNews />
        <FourthNew />
        <Ender />
        <Hirins />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F3DFC1",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#F3DFC1",
    flex: 1,
    width: "96%",
    // marginLeft: "2.5%",
  },
});
