import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native"
import ListItem from "../components/ListItem"

// @DEV: DUMMY DATA
const DATA = [
  {
    dt: 1692348976,
    main: { temp_min: 240.64, temp_max: 273.25 },
    weather: [{ main: "Rain" }],
  },
  {
    dt: 1692348986,
    main: { temp_min: 290.64, temp_max: 293.25 },
    weather: [{ main: "Cloud" }],
  },
  {
    dt: 1692348996,
    main: { temp_min: 300.64, temp_max: 313.25 },
    weather: [{ main: "Sun" }],
  },
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, image } = styles

  return (
    <SafeAreaView style={container}>
      <Text>Upcoming Weather</Text>
      <ImageBackground
        source={require("../../assets/clouds.jpg")}
        style={image}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalblue",
    marginTop: StatusBar.currentHeight || 0,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
})

export default UpcomingWeather
