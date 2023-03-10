import { StackScreenProps } from "@react-navigation/stack"
import { FunctionComponent, useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { RootStackParamList } from "../navigation/RootStack"
import { initZdSdk, testDispatch, syncInitZd } from "../store/HomeSlice"
import { useAppDispatch } from "../store/hooks"

type Props = StackScreenProps<RootStackParamList, "Zd">
const ZdScreen: FunctionComponent<Props> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initZdSdk())
  }, [])
  return (
    <View>
      <Text> ZD initilisation </Text>
      <Button mode="contained-tonal" onPress={() => dispatch(testDispatch())}>
        {" "}
        Try Sync Call{" "}
      </Button>

      {/* <Button
        style={style.button}
        mode="contained-tonal"
        onPress={() => dispatch(syncInitZd())}
      >
        {" "}
        Synchronous ZD Setup{" "}
      </Button> */}
    </View>
  )
}

const style = StyleSheet.create({
  button: {
    margin: 10,
  },
})
export default ZdScreen
