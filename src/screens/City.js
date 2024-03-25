import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { Feather } from "react-native-vector-icons"

const City = () => {
  const {
    cityName,
    cityText,
    container,
    countryName,
    populationText,
    populationWrapper,
    riseSetText,
    riseSetWrapper,
  } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={styles.city}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={populationWrapper}>
          <Feather name={"user"} size={50} color={'red'} />
          <Text style={populationText}>8000</Text>
        </View>
        <View style={riseSetWrapper}>
          <Feather name={'sunrise'} size={50} color={'white'} />
          <Text style={riseSetText}>07:12:00</Text>
          <Feather name={'sunset'} size={50} color={'white'} />
          <Text style={riseSetText}>22:15:00</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  city: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flex: 1,
  },
  countryName: {
    fontSize: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold'
  },
  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  }
})

export default City
