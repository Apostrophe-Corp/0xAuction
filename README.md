# 0xAuction

This platform provides a Python SDK and a JavaScript SDK that builds upon the Algorand SDKs, allowing developers to easily create and update NFTs. As well as a few other utility functions. Making life a bit easier for developers in the Algorand ecosystem.

[Link to Python SDK documentation](https://github.com/Apostrophe-Corp/0xAuction/blob/beta/Algorand-NFT-SDK/python-algorand-sdk/README.md)

[Link to JavaScript SDK documentation](https://github.com/Apostrophe-Corp/0xAuction/blob/beta/Algorand-NFT-SDK/javaScript-sdk/README.md)

The dApp also allows users (non-developers) to create NFTs, auction NFTs, and buy NFTs and other collectibles by submitting bids for them.

[link to DApp](https://0x-auction-beta.vercel.app/) 

Users can start an auction for the NFTs they own and other users can bid on them. Users can also optionally opt in to see the current highest bid for each auction, for every user that opts in to view the live bid of an auction, the auctioneer gets 10% of the opt-in fee, and the rest is sent to the deployer of the 0xAuction contract as a token of appreciation for using our platform. The NFT and current highest bid are always held in escrow by the contract and lesser bids previously made are returned to the respective bidders and new bids not higher than the highest bid are rejected.  

[link to demo video](https://youtu.be/Pwjqb6E0Wgg)

The end game is for users to be able to create, buy and sell NFTs and other collectibles without a central dependency.

## Getting Started

### Pre-requisites

Users should have an Algorand wallet (preferably Pera Algo Wallet) installed on their phone and loaded with Testnet Algos in order to be able to sign transactions, share their NFTs and bid on auctions. The wallet can be installed from the App store (iPhone) or Google Play (Android) as is appropriate.

Of course users can also use other means of connecting to our dApp, as well as other wallets.  
Currently supported connection methods include:  

<!-- - **PeraConnect** -->
- **MyAlgoConnect**
- **WalletConnect**
- **Mnemonic**

[You can get some testnet Algos from the Algo Faucet here](https://bank.testnet.algorand.network/).

## Running the dApp

simply click on the project link, here: [link to DApp](https://0x-auction-beta.vercel.app/) 

### Usage

- When using our dApp, interactions that would require a communication to be made with the blockchain through your account would require you sign some transactions. The following interactions are to be taken note of:  
  - Minting of a token - just 1.
  - Starting an auction - usually 3 transactions.
  - Placing a bid - just 1.
  - Opting in for Live Bid - just 1.
  - Ending an auction - just 1.

- To experience all the features of our dApp, we advise you open at least 3 browser windows (For instance one Incognito Google Chrome tab, one Guest Google Chrome tab and one Brave browser tab).

- Navigate to the app at the URL: [App url](https://0x-auction-beta.vercel.app/) .

- Click on the **Connect Account** button and select the **WalletConnect** option to activate WalletConnect and scan the QR code.

- Click on any of the features of the dApp, Create, Sell, or Buy.

- And buy, sell or create NFTs as you so wish.

#### Important points to note

- Signing of transactions is mandatory for a free flow of the dApp's features.
- Asset opt-in is mandatory before bidding for an asset. If this fails, good, but if it stalls, or the request never comes up on the user's wallet, refresh the page, connect to the same 0xAuction contract and attempt the bid again; it's completely decentralized so no information of yours is lost in this process.
- Only users who opt-in to Live bid get to see the outcome of the auction at its end, else they only get notified that the auction has ended.
- Failure on the Auctioneer's part to give a reply on the prompt to decide whether to accept the highest bid or not, would be regarded as an approval to sell to the highest bidder.
- Users are not advised to use a URL shortener as opposed to the demo, this was only stated for testing purposes as real NFTs must have a reliable media link to their NFT media file, preferably from one hosted on IPFS, as URL shortener providers could someday crash and their links rendered useless.

We encourage you to play around with the dApp and create NFTs, auction NFTs or bid on items at 0xAuction's pool of auctions.

### Troubleshooting

- `Unable to connect with a different wallet on the same browser even after closing the browser and launching it back again.
- Should you encounter any other errors, please tag either `goonerlabs` 0r `aro1914` on [Reach's Discord server](https://bit.ly/3BnPyKd).

## The DApp

![Hero](https://user-images.githubusercontent.com/68448315/208217963-e7ea11af-fa26-47cb-b8bb-b37cc9aea7fb.png)  
![About](https://user-images.githubusercontent.com/68448315/208217977-d92bbc60-5dbb-4a38-a79a-cf459f5696d8.png)  
![Sell](https://user-images.githubusercontent.com/68448315/208217989-3cb38c59-8ba1-4379-b21e-9fdf32f506db.png)  
![Latest_Auctions](https://user-images.githubusercontent.com/68448315/208217995-5db5bf70-7d94-4955-9a1f-d12625fcd973.png)  
![All_Auctions](https://user-images.githubusercontent.com/68448315/208218014-23402c80-da49-4510-a0d8-eb0fb8589166.png)  
![Seller](https://user-images.githubusercontent.com/68448315/208218036-88d63704-c849-4a9d-bab2-4074a8b61056.png)  
![Buyer_1](https://user-images.githubusercontent.com/68448315/208218041-6e8f59a9-de4e-4dee-81bb-d0bbf94d25fd.png)  
![Buyer_2](https://user-images.githubusercontent.com/68448315/208218049-4077ea3f-fb27-4215-8898-d7a41969fe69.png)  

## Authors

- [Owolabi Adeyemi](https://github.com/goonerlabs)

- [Emmanuel Agbavwe](https://github.com/Aro1914)

## License

The 0xAuction project is licensed under the [Apache License, Version 2.0](./LICENSE).
