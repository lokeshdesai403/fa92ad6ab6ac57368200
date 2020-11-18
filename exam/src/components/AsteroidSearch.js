import React from "react";
import { View, StatusBar, Text, SafeAreaView, StyleSheet } from "react-native";
import BaseComponent from "../base/BaseComponent";
import { connect } from "react-redux";
import * as AuthApi from "../containers/AuthApi";
import { Button, Input, Spinner } from "@ui-kitten/components";
import * as  ProcessTypes from "../constants/apiconstants/ProcessTypes";
import { ASTEROID_DETAIL_SCREEN } from "../constants/Constants";

class AsteroidSearch extends BaseComponent {

  state = {
    textAsteroidId: "",
    submitDisable: true,
    isLoading: false,
  };

  componentDidMount() {
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
    if (this.props.authapi._asteroidInfoProcess.status === ProcessTypes.SUCCESS &&
      prevProps.authapi._asteroidInfoProcess.status === ProcessTypes.IDLE) {

      let name = "";
      let nasaUrl = "";
      let isHazardous = "";

      if (this.props.authapi._asteroidInfoProcess.data.data.name !== null
        && this.props.authapi._asteroidInfoProcess.data.data.name !== undefined) {
        name = this.props.authapi._asteroidInfoProcess.data.data.name;
      }

      if (this.props.authapi._asteroidInfoProcess.data.data.nasa_jpl_url !== null
        && this.props.authapi._asteroidInfoProcess.data.data.nasa_jpl_url !== undefined) {
        nasaUrl = this.props.authapi._asteroidInfoProcess.data.data.nasa_jpl_url;
      }

      if (this.props.authapi._asteroidInfoProcess.data.data.nasa_jpl_url !== null
        && this.props.authapi._asteroidInfoProcess.data.data.nasa_jpl_url !== undefined) {
        isHazardous = this.props.authapi._asteroidInfoProcess.data.data.is_potentially_hazardous_asteroid.toString();
      }

      this.props.navigation.navigate(ASTEROID_DETAIL_SCREEN, {
        name: name,
        nasaUrl: nasaUrl,
        isHazardous: isHazardous,
      });

      this.setState({ textAsteroidId: "", submitDisable: true, isLoading: false });
      this.props.resetAsteroidInfo();
    }

    if (this.props.authapi._asteroidIdProcess.status === ProcessTypes.SUCCESS &&
      prevProps.authapi._asteroidIdProcess.status === ProcessTypes.IDLE) {

      let listOfAesteroids = this.props.authapi._asteroidIdProcess.data.data.near_earth_objects;
      let totalAesteroids = listOfAesteroids.length;
      let randomNumber = Math.floor(Math.random() * totalAesteroids) + 1;
      let randomObject = listOfAesteroids[randomNumber];

      let name = "";
      let nasaUrl = "";
      let isHazardous = "";

      if (randomObject.name !== null
        && randomObject.name !== undefined) {
        name = randomObject.name;
      }

      if (randomObject.nasa_jpl_url !== null
        && randomObject.nasa_jpl_url !== undefined) {
        nasaUrl = randomObject.nasa_jpl_url;
      }

      if (randomObject.nasa_jpl_url !== null
        && randomObject.nasa_jpl_url !== undefined) {
        isHazardous = randomObject.is_potentially_hazardous_asteroid.toString();
      }

      this.props.navigation.navigate(ASTEROID_DETAIL_SCREEN, {
        name: name,
        nasaUrl: nasaUrl,
        isHazardous: isHazardous,
      });
      this.setState({ isLoading: false });
      this.props.resetAsteroidIds();
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <StatusBar mode={"dark-content"} />
          <SafeAreaView>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Spinner />
            </View>
          </SafeAreaView>
        </>
      );
    } else {
      return (
        <>
          <StatusBar mode={"dark-content"} />
          <SafeAreaView>

            <View>
              <Input
                style={this.styles.inputStyles}
                placeholder="Enter Asteroid ID"
                value={this.state.textAsteroidId}
                onChangeText={(value) => {

                  if (value.trim() !== "") {
                    this.setState({ textAsteroidId: value, submitDisable: false });
                  } else {
                    this.setState({ textAsteroidId: value, submitDisable: true });
                  }
                }}
              />
              <Button
                style={this.styles.buttonStyles}
                disabled={this.state.submitDisable}
                onPress={() => {
                  this.props.getAsteroidInfo(this.state.textAsteroidId);
                  this.setState({ isLoading: true });
                }}>
                Submit
              </Button>
              <Button
                style={[this.styles.buttonStyles, { marginTop: 10 }]}
                onPress={() => {
                  this.props.getAsteroidIds();
                  this.setState({ isLoading: true });
                }}>
                Random Asteroid
              </Button>
            </View>
          </SafeAreaView>
        </>
      );
    }
  }

  styles = StyleSheet.create({
    inputStyles: {
      margin: 16,
    },
    buttonStyles: {
      marginStart: 16,
      marginEnd: 16,
    },
  });

}

export default connect(AuthApi.mapStateToProps, AuthApi.mapDispatchToProps)(AsteroidSearch);
