import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import {
  Button,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper"
import RootStack from "./navigation/RootStack"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store/store"
import { useEffect } from "react"
import { setexperimentZd } from "./store/HomeSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Zendrive from "react-native-zendrive"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
}
Zendrive.registerZendriveCallbackEventListener(async (event) => {
  console.log(event)
})

export default function App() {
  useEffect(() => {
    const checkZdUser = async () => {
      const output = await AsyncStorage.getItem("expriementZd")
      if (output === "true") {
        store.dispatch(setexperimentZd())
      }
    }
    checkZdUser()
  }, [])
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <RootStack />
        </View>
      </PaperProvider>
    </ReduxProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
