import {
  combineReducers,
  configureStore,
  createSlice,
  Store,
  Slice,
} from '@reduxjs/toolkit'

const initialState = {}

const nftState: Slice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {},
})

const store: Store = configureStore({
  reducer: combineReducers({
    nfts: nftState.reducer,
  })
})

export default store