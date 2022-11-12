import { createSlice, configureStore } from '@reduxjs/toolkit'

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: [],
  reducers: {
    set: (state, action) => (
      [...action.payload]
    ),
    append: (state, action) => (
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      [...state, ...action.payload]
    ),
    removeLast: state => (
      state.splice(-1, 1)
    )
  }
})

export default pokemonSlice;