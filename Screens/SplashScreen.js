import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>FLUT</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0DCDAA",
  },
  text: {
    fontSize: 75.7,
    fontWeight: "bold",
    color: "white",
    lineHeight: 86.51,
  },
});
