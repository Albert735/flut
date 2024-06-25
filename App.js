import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreens from "./Screens/WelcomeScreens";
import SplashScreen from "./Screens/SplashScreen";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import LocationScreen from "./Screens/LocationScreen";
import SearchLocationScreen from "./Screens/SearchLocationScreen";
import Home from "./Screens/Home";
import React, { useState } from "react";

const Stack = createNativeStackNavigator();
export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 4000);
  }, []);

  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="WelcomeScreens"
              component={WelcomeScreens}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LocationScreen"
              component={LocationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchLocationScreen"
              component={SearchLocationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
