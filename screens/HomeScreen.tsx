import { Component, FunctionComponent, useEffect, useState } from "react"
import { Button, Card, Text, TextInput } from "react-native-paper"
import { StyleSheet, View } from "react-native"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { initZdSdk } from "../store/HomeSlice"
import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../navigation/RootStack"
import Zendrive from "react-native-zendrive"

type Props = StackScreenProps<RootStackParamList, "Home">
const HomeScreen: FunctionComponent<Props> = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useAppDispatch()
  const zdUser = useAppSelector((state) => state.homeSlice.expriementZd)
  useEffect(() => {
    console.log("useEffect Home")
    setInputValue("Currently ZD User: " + zdUser)
    if (zdUser) {
      setInputValue("Current User Zd User")
      dispatch(initZdSdk())
    } else {
      setInputValue("Current User Not ZD User ")
    }
    return () => {
      console.log("App is unmounting")
    }
  }, [])

  return (
    <View style={Style.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          mode="contained"
          onPress={() => {
            console.log("Is Setup Button Called ")
            Zendrive.isSDKSetup()
              .then((response) => {
                if (response) {
                  console.log("Promise: check sdk setup")
                  setInputValue(inputValue + " \n Zendrive setup Success")
                }
              })
              .catch((err) => setInputValue(err))
          }}
          style={{ marginBottom: 15 }}
        >
          {" "}
          Get Sdk Status{" "}
        </Button>
        <Card onPress={() => navigation.navigate("Zd")}>
          <Card.Content>
            <Text>Click to experience Zendrive</Text>
          </Card.Content>
        </Card>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "#ffdab9",
        }}
      >
        <Text style={{ width: "100%", height: "100%" }}>{inputValue}</Text>
      </View>
    </View>
  )
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default HomeScreen
