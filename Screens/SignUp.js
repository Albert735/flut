import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import CheckBox from "react-native-check-box";

const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.headerContiainer}>
          <View style={styles.subHeaderContainer}>
            <Image
              style={styles.arrow}
              source={require("../assets/icons/icons8-back-100.png")}
            />
            <Text style={styles.headerText}>Create an account</Text>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.emailInput}>
            <Text style={styles.formText}>Full name</Text>
            <TextInput style={styles.textInput} placeholder="Enter your name" />
          </View>

          <View style={styles.emailInput}>
            <Text style={styles.formText}>Email Address</Text>
            <TextInput
              style={styles.textInput}
              placeholder="name@example.com"
            />
          </View>
          <View style={styles.emailInput}>
            <Text style={styles.formText}>Create password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
            />
          </View>
          <View style={styles.emailInput}>
            <Text style={styles.formText}>Repeat password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Repeat your new password"
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => navigation.navigate("LocationScreen")}
          >
            <Text style={styles.signInText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

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

  headerContiainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
    marginTop: 30,
  },

  subHeaderContainer: {
    flexDirection: "row",
    gap: 20,
  },

  arrow: {
    height: 32,
    width: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
  },

  form: {
    width: 312,
    gap: 30,
    height: 200.02,
  },
  formText: {
    color: "#7C7C7C",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },

  emailInput: {
    height: 58.01,
    justifyContent: "space-between",
  },

  textInput: {
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    borderColor: "#7C7C7C",
  },

  CheckBox: {
    color: "#7C7C7C",
  },

  //Sign in button
  signInButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0DCDAA",
    width: 317,
    height: 60,
    borderRadius: 10,
  },
  signInText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    lineHeight: 24,
  },
});
