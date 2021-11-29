import React, { PureComponent } from "react";
import { Image, StyleSheet, View } from "react-native";
 
const RADIUS = 20;
 
class Card extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    const card = 'cards_images/2_of_clubs.png'
    return (
      <Image style={[styles.finger, { left: x, top: y }]} source={{ uri: 'cards_images/2_of_clubs.png'}} />
    );
  }
}
 
const styles = StyleSheet.create({
  finger: {
    borderColor: "#CCC",
    borderWidth: 4,
    position: "absolute"
  }
});
 
export { Card };