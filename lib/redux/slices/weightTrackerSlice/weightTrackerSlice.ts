/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  db: [
    {
      date: new Date(2023, 7, 1),
      weight: "123.8"
    },
    {
      date: new Date(2023, 7, 2),
      weight: "123.6"
    },
    {
      date: new Date(2023, 7, 3),
      weight: "123.4"
    },
    {
      date: new Date(2023, 7, 4),
      weight: "123.0"
    },
    {
      date: new Date(2023, 7, 5),
      weight: "122.8"
    },
    {
      date: new Date(2023, 7, 13),
      weight: "123.0"
    }
  ]
}

export const weightTrackerSlice = createSlice({
  name: 'weightTracker',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addWeight: (state, weightObj) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.db.push(weightObj.payload);
    },
  },
})

/* Types */
export interface WeightTrackerSliceState {
  date: string
  weight: string
}
