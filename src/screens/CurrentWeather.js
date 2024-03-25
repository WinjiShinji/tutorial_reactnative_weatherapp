import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Feather } from '@expo/vector-icons';

export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like: 5</Text>
        <View style={styles.highLowWrapper}>
        <Text style={styles.highLow}>High: 12 </Text>
        <Text style={styles.highLow}>Low: 4</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  description: {
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: "black"
  },
  highLow: {
    fontSize: 20,
    color: "black"
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  message: {
    fontSize: 30
  },
  temp: {
    fontSize: 48,
    color: "black"
  },  
  wrapper: {
    flex: 1,
    backgroundColor: "pink"
  }
})
