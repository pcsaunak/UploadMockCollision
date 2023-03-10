import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Zendrive from "react-native-zendrive"
import { SDK_KEY } from "../SdkKey"
import AsyncStorage from "@react-native-async-storage/async-storage"

export interface InitType {
  userId: string
  expriementZd: boolean
  isZdSdkSetup: boolean
}
const initialState: InitType = {
  userId: "",
  expriementZd: false,
  isZdSdkSetup: false,
}

export const initZdSdk = createAsyncThunk("initZd", async () => {
  const response = await Zendrive.setup({
    driverId: "synchronous-testing-from-redux",
    sdkKey: SDK_KEY,
  })
  console.log("Respnose value: ")
  console.log(JSON.stringify(response))
  return response
})

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    testDispatch: () => {
      console.log("Test Dispatch called")
    },
    setexperimentZd: (state) => {
      state.expriementZd = true
    },
    syncInitZd: (state) => {
      Zendrive.setup({
        driverId: "synchronous-testing-from-redux",
        sdkKey: "RZgwNQ4iCjDzdO1pFxTZBijgAL3X98l7",
      })
        .then((response) => {
          if (response.isSuccess) {
            state.isZdSdkSetup = true
          } else {
            console.log("Setup not successful")
          }
        })
        .catch((err) => console.log(`ERROR ZD SETUP - ${err}`))
      console.log("this is test dispatch")
    },
  },
  extraReducers(builder) {
    builder.addCase(initZdSdk.fulfilled, (state, action) => {
      console.log(
        `Value from the object the is returned ${JSON.stringify(action)}`
      )
      state.isZdSdkSetup = true
      state.expriementZd = true
      AsyncStorage.setItem("expriementZd", "true")
    }),
      builder.addCase(initZdSdk.pending, () => {
        console.log(`Starting to call async init SDK setup`)
      }),
      builder.addCase(initZdSdk.rejected, (state, action) => {
        console.log(`Rejected case: ${JSON.stringify(action)}`)
      })
  },
})

export const { testDispatch, syncInitZd, setexperimentZd } = homeSlice.actions
export default homeSlice.reducer
