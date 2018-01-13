/**
 * Writing App
 * @flow
 */

import React, { Component } from "react";

import { StackNavigator } from "react-navigation";
import Homescreen from "./screens/Homescreen";
import All from "./screens/All";
import Last7Days from "./screens/Last7Days";
import Trash from "./screens/Trash";
import { StyleSheet } from "react-native";

const stackstyles = StyleSheet.create({
  cards: {
    backgroundColor: "#fff"
  }
});

//StackNavigator(RouteConfigs, StackNavigatorConfig)
const App = StackNavigator(
  {
    Homescreen: { screen: Homescreen },
    All: { screen: All },
    Last7Days: { screen: Last7Days },
    Trash: { screen: Trash }
  },
  {
    headerMode: "none",
    cardStyle: stackstyles.cards
  }
);


export default App;