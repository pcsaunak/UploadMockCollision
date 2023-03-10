import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { FunctionComponent } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import HomeScreen from "../screens/HomeScreen"
import SplashScreen from "../screens/SplashScreen"
import ZdScreen from "../screens/ZdScreen"

export type RootStackParamList = {
  Splash: undefined
  Home: undefined
  Zd: undefined
}
const Stack = createStackNavigator<RootStackParamList>()
const RootStack: FunctionComponent = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            component={SplashScreen}
            name="Splash"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={HomeScreen}
            name="Home"
            options={{ headerLeft: () => null }}
          />
          <Stack.Screen component={ZdScreen} name="Zd" />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default RootStack
