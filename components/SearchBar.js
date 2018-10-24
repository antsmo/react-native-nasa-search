import * as React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class SearchBar extends React.Component {
  state = {
    text: ""
  }

  onChangeText(text) {
    this.setState({ text })
  }

  onSubmitEditing() {
    const { text } = this.state;
    this.props.onSubmit(text);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          value={this.state.text}
          onChangeText={this.onChangeText.bind(this)}
          onSubmitEditing={this.onSubmitEditing.bind(this)}
          clearButtonMode="always"
          style={styles.textInput}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: "orange"
  },
  textInput: {
    height: 36,
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 12
  }
});