# Responses
## What design/implementation decisions did you make and why? 
Overall tried to modularize and seperate functionality as to avoid wet
   ### Store.ts:  
Made sure to add fields to set Nfts, Owner, Balance, and Provider. This allows for scalability as all important information is stored in store, allowing for balance, nfts, owner address to be accessible anywhere in app.

###  header.tsx  
Used  ‘fetch’ hook as a flag to prevent refetching any data after it has already been retrieved. Conditionally rendered results, first getting balance from provider and dispatching it to the store for later use.


###  nftContainer: 
Used ‘fetch’ hook same way as in the header. 

When retrieving data from API, the nftAddress is template literal representation of the store owner address. This is for future proofing. Hard encoded addresses would need to be replaced later instead of just taking it as input and holding it in global state.

The JSON response has a lot of fields so deconstructing it is a must to only save what is needed for our use. I left some fields I thought could be important but they can easily be removed or added to optimize memory.


##  What would you have done if you had more time?
 
Definitely the css, spent too much time trying to optimize little things instead of taking a working version, styling it, and then using the remaining time for optimization.

Was looking forward to using Mantine’s createStyles but ran out of time before I could make use of it for clearer more efficient css. I really like the coupling of the css with components.


## What would you need to do to make this project production ready? 

Finish the CSS including conditional rendering icons for the appropriate protocol, media queries, add logic for redirecting to buy, view larger, and view more information.

It would also need a server as a lot of data manipulation is being done on the front-end which can eat up resources. Definitely would be preferred to have our own custom API for extra filtering, sorting, Pagination, Global Likes Count, ect. Not needed but a nice have if more features are to be added especially if we want to add a search with filters.











# NFT Gallery Coding Challenge

This coding challenge is designed to test your ability to work with React, typescript, and basic web3 libraries. It is designed to be a short project that covers a few different kinds of tasks. Please do not spend more than 4 hours on the project. We want to see how you work so make commits as you normally would. 

## Starter Project

The current repo contains a starter project designed to get you up and running quickly. It was created with [create react app](https://create-react-app.dev/) and already has web3.js installed along with necessary webpack configuration. We've also installed a redux store along with some basic styling. Please use these packages in your solution.

Feel free to install any additional packages you would like.

## Starting the app
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Requirements

## Build an NFT collection gallery
- Use the OpenSea API to display Mark Cuban's API collection styled as close as possible to the image below
- His ETH address is 0x293ed38530005620e4b28600f196a97e1125daac
- [Use the /assets endpoint](https://docs.opensea.io/reference/getting-assets). NOTE: The OpenSea docs are somewhat confusing but you DO NOT need an API key to access mainnet endpoints on this API. 
- Display the first 20 NFTs on page load

![NFT Collection](https://i.postimg.cc/qRCB8sbq/Screen-Shot-2022-02-03-at-4-53-27-PM.png)

## Display the ETH address balance in the header
- Use [web3.js](https://web3js.readthedocs.io/en/v1.7.0/web3-eth.html) to get the ETH balance at the same address that owns the NFTs from the previous step
- Display the balance in ETH with 4 numbers after the decimal
- Style as close as possible to the image below
- You can use the following Infura account link for your web3 provider: wss://mainnet.infura.io/ws/v3/2c7191550131482ea9abe1769197c33c

![Header Example](https://i.postimg.cc/BQBFsdCs/Screen-Shot-2022-02-04-at-3-48-05-PM.png)

# Submitting your solution

Before you submit your project please take a few minutes to write about your solution at the top of this README.md file. Covering at least these topics would be a good idea: 

- What design/implementation decisions did you make and why? 
- What would you have done if you had more time? 
- What would you need to do to make this project production ready? 

Once you are satisfied with your solution please push the repo to your personal github account - either as a public project or a private project that you give us access to and then send us a link. 
