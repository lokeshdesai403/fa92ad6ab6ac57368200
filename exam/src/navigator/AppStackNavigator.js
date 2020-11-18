import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsteroidSearch from "../components/AsteroidSearch";
import { ASTEROID_DETAIL_SCREEN, ASTEROID_SEARCH_SCREEN } from "../constants/Constants";
import AsteroidDetail from "../components/AsteroidDetail";

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ASTEROID_SEARCH_SCREEN} component={AsteroidSearch} />
      <Stack.Screen name={ASTEROID_DETAIL_SCREEN} component={AsteroidDetail} />
    </Stack.Navigator>
  );
}
