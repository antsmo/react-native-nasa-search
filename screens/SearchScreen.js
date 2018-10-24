import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from "../components/SearchBar";
import { Constants } from 'expo';

export default class App extends React.Component {
  static navigationOptions = {
    header: null
  }

  state = {
    results: []
  };

  componentDidMount() {
    this.search("mars");
  }

  search(query) {
    fetch(`https://images-api.nasa.gov/search?q=${query}`)
      .then(response => response.json())
      .then(json => this.processResults(json))
      .catch(error => console.warn('Failed API call'));
  }

  processResults(json) {
    const results = json['collection']['items'];
    const filteredResults = results.filter(
      result => result.data[0]['media_type'] === 'image'
    );
    this.setState({ results: filteredResults });
  }

  onSubmit(text) {
    this.search(text);
  }

  onSelectItem(item) {
    this.props.navigation.push("image", { item });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <SearchBar onSubmit={this.onSubmit.bind(this)} />
        <ResultList
          results={this.state.results}
          onSelectItem={this.onSelectItem.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "orange"
  },
});
