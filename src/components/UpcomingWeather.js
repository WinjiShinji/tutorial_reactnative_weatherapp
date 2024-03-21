import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"

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

const Item = (props) => {
  const { dt_txt, min, max, condition } = props
  return (
    <View style={styles.item}>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.dt}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    marginTop: StatusBar.currentHeight || 0
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20
  }
})

export default UpcomingWeather
