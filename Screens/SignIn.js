import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CheckBox from "react-native-check-box";

const SignIn = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.headerText}>Welcome Back!</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.emailInput}>
            <Text style={styles.formText}>Email Address</Text>
            <TextInput
              style={styles.textInput}
              placeholder="name@example.com"
            />
          </View>
          <View style={styles.emailInput}>
            <Text style={styles.formText}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
            />
          </View>

          <View>
            <CheckBox style={styles.hint} leftText={"Remember me"} />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.signInButton}
            // onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.signInText}>Sign In</Text>
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

  headerText: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
    marginTop: 30,
  },

  form: {
    width: 312,
    gap: 30,
    height: 200.02,
  },
  formText: {
    color: "#7C7C7C",
    fontWeight: 400,
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
    paddingHorizontal: 131.5,
    paddingVertical: 18,
  },
  signInText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: 500,
    lineHeight: 24,
  },
});
