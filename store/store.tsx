import { configureStore } from "@reduxjs/toolkit"
import HomeSlice from "./HomeSlice"

export const store = configureStore({
  reducer: {
    homeSlice: HomeSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
