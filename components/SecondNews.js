import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";

const SecondNews = () => {
  const rightSwipe = () => {
    return (
      <View style={{ top: 30 }}>
        <Text style={styles.info}>
          He takes the full force of the bomb, but the sun revives him and he
          returns to the fight. Superman picks up Batman's Kryptonite spear, and
          stabs Doomsday with it. Doomsday stabs him too and Superman is weak
          enough from all of the various stabbings and explosions that
          Doomsday's stab proves fatal.
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image
            style={styles.secondImage}
            source={require("../assets/supiadumia.png")}
          />
          <Image
            style={styles.thirdImage}
            source={require("../assets/supseksa.png")}
          />
        </View>
      </View>
    );
  };
  return (
    <Swipeable renderRightActions={rightSwipe}>
      <View style={styles.container}>
        <View style={styles.contexi}>
          <Text style={styles.headText}>SUPER-MAN IS DEAD!</Text>
          <Image
            style={styles.ImageStke}
            source={require("../assets/cofina.jpeg")}
          />
          <Text style={styles.secText}>THE CITY IS MOURNING</Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default SecondNews;

const styles = StyleSheet.create({
  container: { height: 270, top: 30 },
  contexi: {},
  ImageStke: {
    height: 120,
    width: "100%",
    top: 20,
    borderWidth: 3,
    borderColor: "#9e3641",
  },
  headText: {
    fontSize: 27,
    textAlign: "center",
    fontWeight: "900",
    color: "#3B3C37",
    backgroundColor: "#9e3641",
    top: 5,
    borderWidth: 3,
    borderColor: "#3B3C37",
  },
  secText: {
    top: 40,
    backgroundColor: "#9e3641",
    fontSize: 27,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#3B3C37",
    fontWeight: "900",
    color: "#3B3C37",
  },
  info: {
    top: 10,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#3B3C37",
    color: "#F3DFC1",
    borderWidth: 3,
    borderColor: "#9e3641",
  },
  secondImage: {
    width: 200,
    height: 80,

    top: 20,
    borderWidth: 3,
    borderColor: "#9e3641",
  },

  thirdImage: {
    height: 80,
    width: 120,
    resizeMode: "contain",
    backgroundColor: "#3B3C37",
    borderWidth: 3,
    borderColor: "#9e3641",
    top: 20,
  },
});
