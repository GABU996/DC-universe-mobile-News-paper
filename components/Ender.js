import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Ender = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          top: 40,
          color: "#3B3C37",
          fontWeight: "800",
        }}
      >
        ADDITIONAL INFO
      </Text>
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#3B3C37",
          top: 40,
        }}
      ></View>
    </View>
  );
};

export default Ender;

const styles = StyleSheet.create({});
