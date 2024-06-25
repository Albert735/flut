import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Ticket from "../Screens/Ticket";
import Profile from "../Screens/Profile";
import Liked from "../Screens/Liked";
import SearchLocationScreen from "../Screens/SearchLocationScreen";

const Tab = createBottomTabNavigator();

const BottomNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={SearchLocationScreen} />
      <Tab.Screen name="Ticket" component={Ticket} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
