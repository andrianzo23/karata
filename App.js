import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Card } from "./src/renderers";
import { MoveFinger } from "./src/systems"
 
export default class BestGameEver extends PureComponent {
  constructor() {
    super();
  }
 
  render() {
    return (
        
      </GameEngine>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
 
AppRegistry.registerComponent("BestGameEver", () => BestGameEver);