/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  StyleSheet,
} from "react-native";

import {
  Colors,
} from "react-native/Libraries/NewAppScreen";
import { applyMiddleware, createStore } from "redux";
import AppCombineReducers from "./src/reducers";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { AppStackNavigator } from "./src/navigator";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

const store = createStore((AppCombineReducers), applyMiddleware(thunk, logger));

const App: () => React$Node = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </Provider>
    </ApplicationProvider>
  )
    ;
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});

export default App;
