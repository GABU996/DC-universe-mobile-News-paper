import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ThirdNews = () => {
  const Right = () => {
    return (
      <View style={{ top: 50, width: "100%" }}>
        <Text
          style={{
            top: 15,
            fontSize: 18,
            fontWeight: "600",
            textAlign: "center",
            borderWidth: 3,
            borderColor: "#3B3C37",
            color: "#3B3C37",
          }}
        >
          This morning, Sofia Falcone was murdered, someone shot her in the
          head. Her body was found By servant of the Restaurant , she was on the
          floor in the kitchen.
        </Text>
        <Image
          source={require("../assets/sofia.jpeg")}
          style={{
            height: 150,
            width: "100%",
            top: 30,
            borderWidth: 3,
            borderColor: "#3B3C37",
          }}
        />
      </View>
    );
  };
  return (
    <Swipeable renderRightActions={Right} renderLeftActions={Right}>
      <View style={styles.container}>
        <Image
          style={styles.ImageStyle}
          source={require("../assets/Falkia.png")}
        />

        <View style={styles.secondCont}>
          <Text style={styles.maincText}>FALCONE'S DAUGHTER WAS MURDERED!</Text>
          <Text style={styles.lastText}>
            THE THREAT OF WAR BETWEEN FAMILIES?
          </Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default ThirdNews;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 50,
    height: 350,
    backgroundColor: "#F3DFC1",
  },
  secondCont: { flexDirection: "column" },
  ImageStyle: {
    width: 165,
    height: 300,
    borderWidth: 3,
    borderColor: "#3B3C37",
  },
  maincText: {
    width: 190,
    backgroundColor: "red",
    textAlign: "center",
    borderWidth: 3,
    backgroundColor: "#F3DFC1",
    color: "#3B3C37",
    borderColor: "#3B3C37",
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 50,
  },

  lastText: {
    width: 190,
    top: 15.5,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#3B3C37",
    color: "#F3DFC1",
    borderWidth: 3,
    borderColor: "#3B3C37",
    fontWeight: "bold",
  },
});
