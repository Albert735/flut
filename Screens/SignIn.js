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
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const navigation = useNavigation();

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      navigation.navigate("Home");
      console.log("Navigating to Home");
    }
    console.log("form submitted");
    console.log("Navigating to Home");

    // navigation.navigate("Home"); // navigate to Home screen
    
  };

  const handleClick = (newValue) => {
    setIsChecked(newValue);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.headerContiainer}>
          <View style={styles.subHeaderContainer}>
            <Image
              style={styles.arrow}
              source={require("../assets/icons/icons8-back-100.png")}
            />
            <Text style={styles.headerText}>Welcome Back!</Text>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.emailInput}>
            <Text style={styles.formText}>Email Address</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.textInput}
              placeholder="name@example.com"
              keyboardType="email-address"
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>

          <View style={styles.emailInput}>
            <Text style={styles.formText}>Password</Text>
            <TextInput
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.textInput}
              placeholder="Enter your password"
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>

          <View>
            <CheckBox
              onClick={handleClick}
              isChecked={isChecked}
              style={styles.hint}
              leftText={"Remember me"}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.signInButton} onPress={handleSubmit}>
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

  errorText: {
    color: "red",
    fontSize: 12,
    fontWeight: 300,
  },
});
