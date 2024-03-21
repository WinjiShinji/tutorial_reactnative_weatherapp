import { SafeAreaView, StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
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
    alignItems: 'flex-start'
  },
  container: {
    flex: 1,
    alignItems: "center",
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
