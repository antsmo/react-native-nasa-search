import * as React from "react";
import {
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

export default class ResultList extends React.Component {
  onSelectItem(item) {
    this.props.onSelectItem(item);
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.itemWrapper}
        onPress={() => this.onSelectItem(item)}
      >
        <Image style={styles.thumbnail} source={{ uri: item.links[0].href }} />
        <Text style={styles.title}>
          {item.data[0].title}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    // If there are no results, we'll show a message...
    if (this.props.results < 1) {
      return (
        <View style={styles.wrapperEmpty}>
          <Text>There are no results to show...</Text>
        </View>
      )
    }

    // ...otherwise, we'll show the list of results
    return (
      <FlatList
        data={this.props.results}
        renderItem={this.renderItem.bind(this)}
        style={styles.wrapper}
      />
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
  },
  wrapperEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  itemWrapper: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#DFDFDF"
  },
  title: {
    flex: 1,
    fontSize: 16
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginRight: 16
  }
});