import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

export default class ImageScreen extends React.Component {
  render() {
    const { item } = this.props.navigation.state.params;
    const imageUrl = item.links[0].href;

    return (
      <View style={styles.wrapper}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "black"
  },
  image: {
    flex: 1
  }
});