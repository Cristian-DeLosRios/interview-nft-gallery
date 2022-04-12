import { FC } from 'react'
import { AppShell } from '@mantine/core'
import Header from './components/Header'
import NftContainer from './components/NftContainer'
import './App.css'
import store, { setOwner, setProvider } from './store'

//import Web3 from 'web3' //web3 umbrella package



store.dispatch(setOwner('0x293ed38530005620e4b28600f196a97e1125daac'));//target ETH address to be used to fetch nft data
store.dispatch(setProvider('wss://mainnet.infura.io/ws/v3/2c7191550131482ea9abe1769197c33c'));


const App: FC = () => {
  return (
    <AppShell
      padding="md"
      header={
        <Header />
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <NftContainer />
    </AppShell>
  )
}

export default App
