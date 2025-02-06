import { createSlice } from "@reduxjs/toolkit"

import type { IPlaygroundState } from "./types"

export const initialState: IPlaygroundState = {
  currentStep: 0,
}

export const playgroundSlices = createSlice({
  name: "playgound",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1
    },
    setSteps: (state) => {
      const randomKeys = Math.floor(Math.random() * 4)
      console.log(randomKeys)
    },
  },
})

export const { setCurrentStep, setSteps } = playgroundSlices.actions
export default playgroundSlices.reducer
