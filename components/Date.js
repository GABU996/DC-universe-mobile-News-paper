import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Date = () => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#3B3C37",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          fontSize: 10,
          fontWeight: "bold",
          color: "#3B3C37",
        }}
      >
        Date: Monday/January:27/2022
      </Text>
      <Text style={{ fontSize: 10, fontWeight: "bold", color: "#3B3C37" }}>
        Weather: Sunny/Windy/15°
      </Text>
    </View>
  );
};

export default Date;

const styles = StyleSheet.create({});
