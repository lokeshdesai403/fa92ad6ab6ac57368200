import React from "react";
import BaseComponent from "../base/BaseComponent";
import { View, StatusBar, Text, SafeAreaView, StyleSheet } from "react-native";

class AsteroidDetail extends BaseComponent {

  componentDidMount() {
  }

  render() {
    return (
      <>
        <StatusBar mode={"dark-content"} />
        <SafeAreaView>
          <View>
            {this.renderAsteroidDetails("name: ", this.props.route.params.name)}
            {this.renderAsteroidDetails("nasa_jpl_url: ", this.props.route.params.nasaUrl)}
            {this.renderAsteroidDetails("is_potentially_hazardous_asteroid: ", this.props.route.params.isHazardous)}
          </View>
        </SafeAreaView>
      </>
    );
  }

  renderAsteroidDetails(header, value) {
    return (
      <View style={{ marginTop: 10, marginStart: 10, marginEnd: 10 }}>
        <Text>
          {header}
        </Text>
        <Text>
          {value}
        </Text>
      </View>
    );
  }
}

export default AsteroidDetail;
