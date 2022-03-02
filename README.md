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
