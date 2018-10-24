import SearchScreen from "./screens/SearchScreen";
import ImageScreen from "./screens/ImageScreen";
import { createStackNavigator } from "react-navigation";

const Navigator = createStackNavigator({
  search: { screen: SearchScreen },
  image: { screen: ImageScreen }
}, {
  headerMode: "screen"
});

export default Navigator;