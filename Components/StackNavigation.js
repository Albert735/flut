import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LocationScreen from "../Screens/LocationScreen";
import SignUp from "../Screens/SignUp";
import SignIn from "../Screens/SignIn";
import Home from "../Screens/Home";
import WelcomeScreens from "../Screens/WelcomeScreens";
import SplashScreen from "../Screens/SplashScreen";
import SearchLocationScreen from "../Screens/SearchLocationScreen";
import React, { useState } from "react";
import BottomNavigation from "./BottomNavigation";
import Profile from "../Screens/Profile";
import Liked from "../Screens/Liked";
import Ticket from "../Screens/Ticket";


const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  //   if (isShowSplash) {
  //     return <SplashScreen />;
  //   }

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
          <Stack.Screen
            name="Ticket"
            component={Ticket}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Liked"
            component={Liked}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={BottomNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </>
  );
}
