import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Swipeable } from "react-native-gesture-handler";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const FourthNew = () => {
  const swipia = () => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require("../assets/belia.png")}
          style={{
            height: 100,
            width: "100%",
            borderWidth: 3,
            borderColor: "#3B3C37",
            top: 70,
          }}
        />
        <Text style={styles.infotext}>
          Lex Luthor is imprisoned in Belle Reve, after his crimes: (killed his
          parents , made illegal robot people , killed his fighting instructor
          and what's important he created doomsday )
        </Text>
      </View>
    );
  };
  return (
    <Swipeable renderLeftActions={swipia} renderRightActions={swipia}>
      <View style={styles.container}>
        <View style={{ justifyContent: "space-between" }}>
          <Text style={styles.headText}>DEVIL BEHIND THE BUSINESSMAN</Text>
          <Text style={styles.textStyle}>
            SCIENTIST AND BUSINESSMAN LEX LUTHOR GOT ARRESTED!
          </Text>
        </View>
        <View>
          <Image
            style={{ width: 160, borderWidth: 3, borderColor: "#3B3C37" }}
            source={require("../assets/lexsexa.jpeg")}
          />
        </View>
      </View>
    </Swipeable>
  );
};

export default FourthNew;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    backgroundColor: "#F3DFC1",
  },
  imageStyle: {},
  textStyle: {
    width: 180,
    fontSize: 20,
    fontWeight: "900",
    color: "#F3DFC1",
    textAlign: "center",
    backgroundColor: "#3B3C37",
    lineHeight: 40,
    borderWidth: 3,
    borderColor: "#9e3641",
  },
  headText: {
    fontSize: 20,
    width: 180,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#3B3C37",
    fontWeight: "900",
    color: "#3B3C37",
  },
  infotext: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    top: 90,
    lineHeight: 22,
    backgroundColor: "#9e3641",
    borderWidth: 3,
    color: "#3B3C37",
    borderColor: "#3B3C37",
  },
});
