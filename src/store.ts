import {
  combineReducers,
  configureStore,
  createSlice,
  Store,
  Slice,
} from '@reduxjs/toolkit'
import Web3 from 'web3'

const initialState = {}


//set owner

const nftState: Slice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    setNFTs: (state, action) => {
      state.nfts = action.payload
    },
    setOwner: (state, action) => {
      state.owner = action.payload
    },
    setProvider: (state, action) => {
      state.provider = action.payload
    },
    setBalance: (state, action) => {
      state.balance = action.payload
    }
  },
})


const store: Store = configureStore({
  reducer: combineReducers({
    nfts: nftState.reducer,
  })
})

export function getNFTs (){ //store.getState().nfts.nfts);
  //console.log("in store.ts fn getNFTS")
  return store.getState().nfts.nfts as Array<any>;
} 

export function getEth(web3: Web3,nftAddress:any){
  const result = web3.eth.getBalance(nftAddress, (err, balance: any) => {
    if (err) {
        console.log(err)
    }
    //console.log(nftAddress, (balance / 10 ** 18).toFixed(4));
    //return Number((balance / 10 ** 18).toFixed(4));
})
return result;
}



export const {setNFTs} = nftState.actions;
export const {setOwner} = nftState.actions;
export const {setProvider} = nftState.actions;
export const {setBalance} = nftState.actions;


export default store