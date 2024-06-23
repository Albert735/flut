import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const WelcomeScreens = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        {/* section 1 */}
        <View style={styles.header}>
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.signIn}>Sign in or create a new account</Text>
        </View>

        {/* section 2 */}
        <View style={styles.imageContainer}>
          <Image source={require("../assets/Frame.png")} />
        </View>

        {/* section 3 */}
        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.noAccount}>
            <Text style={styles.mainText}>
              No account yet? <Text style={styles.text}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreens;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: 20,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100,
  },
  welcome: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 38.4,
  },
  signInButton: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: "400",
    color: "#7C7C7C",
  },

  // image style
  imageContainer: {
    marginTop: 0,
    height: 248.93,
    width: 320.64,
  },

  //Button styles
  buttonSection: {
    gap: 10,
  },

  signInButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0DCDAA",
    width: 317,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 131.5,
    paddingVertical: 18,
  },
  signInText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    lineHeight: 24,
  },

  noAccount: {
    width: 317,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.3,
    borderColor: "#7C7C7C",
  },
  mainText: {
    fontWeight: "500",
  },

  text: {
    color: "#0DCDAA",
  },
});
