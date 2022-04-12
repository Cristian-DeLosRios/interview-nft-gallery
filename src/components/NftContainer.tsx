import { FC, useEffect } from 'react'
import { Container, SimpleGrid } from '@mantine/core'
import NftItem from './NftItem'
import store, { setNFTs, getNFTs } from '../store'
import React from 'react'

const NftContainer: FC = () => {
  //const [data, setData] = React.useState([]);
  const [fetched, setFetched] = React.useState(false); //to be used to prevent re-fetching if data already in store

  //make request to opensea api to get nft data https://api.opensea.io/api/v1/collections?offset=0&limit=300
  let getData = async (): Promise<any> => {
    //console.log("getData called")
    const nftAddress = store.getState().nfts.owner;//'0x293ed38530005620e4b28600f196a97e1125daac' //target ETH address to be used to fetch nft data
    //store.dispatch(setOwner(nftAddress));
    //console.log(store.getState().nfts.owner);
    const limit = 20; //maximum number of nfts to be fetched
    const response = await fetch(`https://api.opensea.io/api/v1/assets?order_direction=desc&owner=${nftAddress}&limit=${limit}`)
      .then(res => res.json()).catch(err => console.log(err))
    //console.log(response);

    let result = response.assets.map((nft: { id: number; num_sales: number; image_url: string; name: string; token_id: number; token_metadata: string, collection: {name: string}}) => { 
      const { id, num_sales, image_url, name, token_id, token_metadata, collection} = nft;   //deconstruct nft object to get individual relevant data
      //const { name: collectionName } = collection;
      collection.name = (collection.name).slice(0,18).concat("..."); //truncate collection name to 16 characters
      return { id, num_sales, image_url, name, token_id, token_metadata, collection: collection.name }; //return object with only relevant fields
    })
    //console.log('result', result);
    return result;
  }

  useEffect(() => {
    //getData().then(data => console.log(data)).catch(err => console.log(err))

    //only get data if data hasnt been fetched
    if (!fetched) {
      //console.log('not in store');
      getData().then(data => store.dispatch(setNFTs(data)))
        .then(() => {
          console.log('disptached to store');
          setFetched(true)
        })
        .catch(err => {
          setFetched(false);
          console.log(err)
        });
    }
  }, [fetched])

  return (
    <Container >
      <SimpleGrid cols={2} breakpoints={[{ minWidth: 'xs', cols: 5 }]}>
        {
          fetched && getNFTs().map((nft: { id: number }) => <NftItem key={nft.id} nft={nft} />)
        }
      </SimpleGrid>
    </Container>
  )
}

export default NftContainer
