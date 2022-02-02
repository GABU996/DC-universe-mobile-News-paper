import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Hirins = () => {
  return (
    <View style={{ top: 30, height: 240 }}>
      <Text
        style={{
          fontSize: 35,
          fontWeight: "900",
          textAlign: "center",
          color: "#3B3C37",
          backgroundColor: "#9e3641",
          borderWidth: 3,
          borderColor: "#3B3C37",
          height: 120,
          top: 30,
          paddingTop: 40,
        }}
      >
        WE ARE HIRING!
      </Text>
    </View>
  );
};

export default Hirins;

const styles = StyleSheet.create({});
