import { Image, StyleSheet, Text, View, Animated } from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";

const FirstNews = () => {
  const leftSwipe = (dragX) => {
    return (
      <View style={{ width: "100%" }}>
        <View
          style={{
            top: 30,

            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 3,
              borderColor: "#3B3C37",
              top: 30,
              width: "100%",
            }}
          >
            <Image
              style={{
                height: 200,
                width: 150,
              }}
              source={require("../assets/Barry.png")}
            />
            <Text
              style={{
                width: 200,
                textAlign: "center",
                fontWeight: "900",
                color: "#3B3C37",
                fontSize: 19,
                lineHeight: 40,
              }}
            >
              Flash's real name is Barry Allen. He is a forensic scientist, 28
              years old, lives in Central City.
            </Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              borderWidth: 3,
              color: "#F3DFC1",
              borderColor: "#9e3641",
              backgroundColor: "#3B3C37",
              top: 35,
              lineHeight: 50,
              width: "100%",
            }}
          >
            Goverment is cooperating with Flash to capture Weather Wizard.
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Swipeable
      containerStyle={{ flex: 1 }}
      rightThreshold={80}
      friction={2}
      renderRightActions={leftSwipe}
      overshootRight
      renderLeftActions={leftSwipe}
      leftThreshold={80}
    >
      <View style={{ height: 450 }}>
        <View style={styles.container}>
          <View style={styles.NewsTextContainer}>
            <Text style={styles.NewsText}>WHO IS HIDING BEHIND THE MASK?</Text>
          </View>
          <View style={styles.NewsPictureContainer}>
            <Image
              style={styles.NewsPicture}
              source={require("../assets/fleshia12.png")}
            />
            <Text
              style={{
                fontSize: 21,
                fontWeight: "900",

                color: "#9e3641",
                top: 18,
                borderWidth: 3,
                borderColor: "#9e3641",
                textAlign: "center",
              }}
            >
              THE FLASH
            </Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

export default FirstNews;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    top: 30,
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#F3DFC1",
  },
  NewsTextContainer: {
    width: 200,
    borderWidth: 3,
    borderColor: "#3B3C37",
  },
  NewsText: {
    fontSize: 50,
    fontWeight: "900",
    textAlign: "center",
    color: "#3B3C37",
    lineHeight: 79,
  },
  NewsPictureContainer: {},
  NewsPicture: {
    height: 350,
    width: 150,
    borderWidth: 3,
    borderColor: "#3B3C37",
    alignSelf: "flex-end",
  },
});
