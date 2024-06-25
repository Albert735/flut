import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigation from "./Components/StackNavigation";
// import BottomNavigation from "./Components/BottomNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <BottomNavigation  /> */}
    </NavigationContainer>
  );
}
