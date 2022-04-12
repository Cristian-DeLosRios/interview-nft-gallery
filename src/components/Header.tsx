import { FC, useEffect, useMemo } from 'react'
import { Badge, Text, createStyles, Group, Header } from '@mantine/core'
import Web3 from 'web3'
import store, { getEth, setBalance } from '../store'
import React from 'react'



const HeaderComponent: FC = () => {
  const [fetched, setFetched] = React.useState(false);
  //console.log('header component');
  //const [balance, setBalance] = React.useState(0);
  const nftAddress = store.getState().nfts.owner;


  //if we dont have a balance in store, fetch it
  useEffect(() => {
    //console.log('useEffect called');
    if (!fetched) {
      const web3 = new Web3(store.getState().nfts.provider); //provider is set in store and initalized in App.tsx

      getEth(web3, nftAddress).then(b => {
        return (parseInt(b) / 10 ** 18).toFixed(4); //convert to ETH and round to 4 decimal places
      }).then(balance => {
        store.dispatch(setBalance([balance]))//set balance in store
        console.log(store.getState().nfts.balance);
        setFetched(true);
        //return store.getState().nfts.balance;
      }).catch(err => console.log(err));
    }
  }, [nftAddress, fetched])


  return (
    <Header height={60} padding="sm" style={{ backgroundColor: '#00152f', display: 'flex', justifyContent: 'space-between' }}>
      <img
        src="https://constellationnetwork.io/wp-content/uploads/2021/04/Constellation-Logo_White.png"
        width="150"
        alt="Constellation Logo"
      />
      {fetched && (
        <Group align="center" style={{ marginRight: '1vw' }}>
          <Badge style={{ backgroundColor: 'rgb(84, 84, 15)', color: 'yellow', fontWeight: 'bold' }}>
            <Text>{store.getState().nfts.balance} ETH</Text>
          </Badge>
        </Group>)
      }


    </Header>
  )
}


export default HeaderComponent
