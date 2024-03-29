import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import RowText from "../components/RowText"

export default function CurrentWeather() {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLow,
    highLowWrapper,
    description,
    message,
    bodyWrapper,
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels Like: 5</Text>
        <RowText
          messageOne={"High: 12 | "}
          messageTwo={"Low: 4"}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
          containerStyles={highLowWrapper}
        />
      </View>
      <RowText
        messageOne={"Its Sunny"}
        messageTwo={"Its perfect t-shirt weather"}
        messageOneStyles={description}
        messageTwoStyles={message}
        containerStyles={bodyWrapper}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    fontSize: 20,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  message: {
    fontSize: 30,
  },
  temp: {
    fontSize: 48,
    color: "black",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
})
