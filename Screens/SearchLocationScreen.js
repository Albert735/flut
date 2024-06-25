import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import React from "react";

const SearchLocationScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.headerContiainer}>
          <View style={styles.searchContainer}>
            <Image
              style={styles.arrow}
              source={require("../assets/icons/icons8-back-100.png")}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Select Location..."
            />
          </View>
          <View>
            <Image
              style={styles.searchIcon}
              source={require("../assets/icons/searchIcon.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchLocationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    padding: 20,
  },
  headerContiainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  arrow: {
    height: 32,
    width: 32,
  },
  textInput: {
    fontSize: 16,
    fontWeight: "400",
    borderBottomWidth: 0.5,
    borderColor: "#7C7C7C",
    width: 300,
    paddingVertical: 10,
  },
  searchIcon: {
    height: 32,
    width: 32,
  },
});
