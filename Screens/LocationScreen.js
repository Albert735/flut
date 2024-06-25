import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const LocationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.location}>
          <Image source={require("../assets/illustration.png")} />
          <Text style={styles.locationheader}>Select your location</Text>
          <Text style={styles.locationText}>
            Let’s find your next event. Stay in tune with what’s happening in
            your area!
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("SearchLocationScreen")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Choose City</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
    padding: 20,
  },
  location: {
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    marginTop: 100,
  },
  locationheader: {
    textAlign: "center",
    lineHeight: 19.2,
    fontSize: 20,
    fontWeight: "700",
  },
  locationText: {
    textAlign: "center",
    lineHeight: 24,
    fontSize: 16,
    fontWeight: "400",
    color: "#7C7C7C",
  },
  button: {
    backgroundColor: "#0DCDAA",
    width: 317,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
