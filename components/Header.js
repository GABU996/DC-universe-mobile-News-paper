import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textexa}>DEVIL</Text>
      <View style={styles.centrovka}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/demskia.png")}
        />
      </View>
      <Text style={styles.textexa}>NEWS</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9e3641",
    height: 70,
    width: "100%",
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#3B3C37",
  },
  centrovka: {
    alignSelf: "center",
    width: 65,
    height: 65,
    backgroundColor: "black",
    borderRadius: 100,
  },
  imageStyle: {
    height: 50,
    width: 50,
    alignSelf: "center",
    resizeMode: "contain",
  },
  textexa: {
    fontSize: 40,
    color: "#F3DFC1",
    fontWeight: "bold",
    top: 10,
  },
});
