import { FC } from 'react'
import { AppShell } from '@mantine/core'
import Header from './components/Header'
import NftContainer from './components/NftContainer'
import './App.css'

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
