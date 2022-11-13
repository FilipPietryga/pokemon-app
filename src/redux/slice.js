import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const pagination = (url, pages, limit) => {
  return `${url}?_page=${pages}&_limit=${limit}`;
}
//do osobnej funkcji ??
export const fetchPokemon = createAsyncThunk ('pokemon/fetchPokemon', async ({page=5, limit=5}) => {
  try {
    const url = 'http://localhost:3000/pokemon'
    const paginatedUrl = pagination(url, page, limit);
    const json = await fetch(paginatedUrl).then(res => res.json())
    return json
  } catch (err) {
    console.log(err)
  }
})

const slice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemon: []
  },
  reducers: {
    set: (state, action) => (
      [...action.payload]
    ),
    append: (state, action) => (
      [...state.pokemon, ...action.payload]
    ),
    pop: state => (
      [...state.pokemon.splice(-1, 1)]
    ),
  },
  extraReducers(builder) {
    builder.addCase(fetchPokemon.pending, (state, action) => (
      state = {
        pokemon: [
          {
            name: 'loading', 
            type:['???'], 
            num: '000', 
            img: '...'
          }
        ]
      }
    ))
    .addCase(fetchPokemon.fulfilled, (state, action) => (
      state = {
        pokemon: [...action.payload]
      }
    ))
    .addCase(fetchPokemon.rejected, (state, action) => (
      state = {
        pokemon: [
          {
            name: 'rejected', 
            type:['???'], 
            num: '000', 
            img: '...'
          }
        ]
      }
    ))
  }
})

export const selectPokemon = (state) => { return state.pokemon }
export const selectStatus = (state) => { return state.status }
export const { set, append, pop } = slice.actions 

export default slice.reducer;