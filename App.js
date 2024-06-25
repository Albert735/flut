import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigation from "./Components/StackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
