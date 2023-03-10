import { StackScreenProps } from "@react-navigation/stack"
import { FunctionComponent } from "react"
import { StyleSheet, View } from "react-native"
import { Button } from "react-native-paper"
import { RootStackParamList } from "../navigation/RootStack"
import LottieView from "lottie-react-native"

type Props = StackScreenProps<RootStackParamList, "Splash">
const SplashScreen: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <View style={Style.container}>
      <LottieView
        source={require("../assets/bezier-curve.json")}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          navigation.navigate("Home")
        }}
      />
    </View>
  )
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
})

export default SplashScreen
