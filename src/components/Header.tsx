import { FC } from 'react'
import { Header } from '@mantine/core'

const HeaderComponent: FC = () => {
  return (
    <Header height={60} padding="sm" style={{ backgroundColor: '#00152f' }}>
      <img
        src="https://constellationnetwork.io/wp-content/uploads/2021/04/Constellation-Logo_White.png"
        width="150"
        alt="Constellation Logo"
      />
    </Header>
  )
}

export default HeaderComponent
