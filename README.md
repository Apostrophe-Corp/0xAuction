# 0xAuction

This project was created for the Greenhouse Hack 2, organized by Algorand and hosted on Gitcoin.

The dApp allows users to create NFTs, auction NFTs, and buy NFTs and other collectibles by submitting bids for them.

Users can start an auction for the NFTs they own and other users can bid on them. Users can also optionally opt in to see the current highest bid for each auction, for every user that opts in to view the live bid of an auction, the auctioneer gets 10% of the opt-in fee, and the rest is sent to the deployer of the 0xAuction contract as a token of appreciation for using our platform. The NFT and current highest bid are always held in escrow by the contract and lesser bids previously made are returned to the respective bidders and new bids not higher than the highest bid are rejected.  

The end game is for users to be able to create, buy and sell NFTs and other collectibles without a central dependency.

## Getting Started

### Pre-requisites and Local Development

Developers using this dApp should already have Reach, Docker and Node installed on their local machines.

### The guidelines for installation can be found below

[Instructions for installing Reach and Docker](https://docs.reach.sh/quickstart/)  

[Instructions for installing Node](https://nodejs.org/en/download/)

In addition, they should have an Algorand wallet (preferably Pera Algo Wallet) installed on their phone and loaded with Testnet Algos in order to be able to sign transactions, share their NFTs and bid on auctions. The wallet can be installed from the App store (iPhone) or Google Play (Android) as is appropriate.

Of course users can also use other means of connecting to our dApp, as well as other wallets.  
Currently supported connection methods include:  

- **MyAlgoConnect**
- **PeraConnect**
- **WalletConnect**

[You can get some testnet Algos from the Algo Faucet here](https://bank.testnet.algorand.network/).

## Running the dApp

We recommend running the dApp using Ubuntu20.04 terminal.

### Steps

- Fork the repository and or clone the repository.

- Change directory (cd) into the directory.

Then run the following commands to start up the dApp:

```sh
>> npm install

>> ./reach compile

>> ./reach compile auction.rsh

>> REACH_CONNECTOR_MODE=ALGO ./reach react

```

### Usage

- When using our dApp, interactions that would require a communication to be made with the blockchain through your account would require you sign some transactions. The following interactions are to be taken note of:  
  - Deployment of an 0xAuction contract - usually 3 transactions.
  - Minting of a token - just 1.
  - Starting an auction - multiple transactions.
  - Placing a bid - just 1.
  - Opting in for Live Bid - just 1.
  - Ending an auction - multiple transactions.

- To experience all the features of our dApp, we advise you open at least 3 browser windows (For instance one Incognito Google Chrome tab, one Guest Google Chrome tab and one Brave browser tab).

- Navigate to the app at the URL `http://localhost:3000`.

- Click on the **Connect Account** button and select the **Other Wallet** option to activate Wallet Connect and scan the QR code.

- Click on any of the features of the dApp, Create, Sell, or Buy to start the process to launch or connect to, an 0xAuction contract.

- Upon selecting 'Deploying' as your desired action, and signing all transactions on your wallet, your 0xAuction contract would be deployed (be sure to copy the contract information to the clipboard after deployment), and you can head over to the second browser tab to create an NFT or Start an Auction.

- Head on over to the next browser and connect with a separate wallet, click on the **Buy** button, select 'Attaching' as the desired action, paste the 0xAuction contract information and attach. Click on the **Buy** button and you can then go ahead to test the bidding functionality.

- Repeat the step above with a third wallet and simulate bidding against the other users/wallets.

#### Important points to note

- Signing of transactions is mandatory for a free flow of the dApp's features.
- A user cannot have more than one instance of the dApp connected to the same 0xAuction contract while they have an auction on, for all views will have the auction on display.
- A user can have multiple instances of 0xAuction, for the purpose of bidding on multiple auctions at a time, but can only have one instance while an auction of theirs is live.
- Asset opt-in is mandatory before bidding for an asset. If this fails, good, but if it stalls, or the request never comes up on the user's wallet, refresh the page, connect to the same 0xAuction contract and attempt the bid again; it's completely decentralized so no information of theirs is lost in this process.
- Only users who opt-in to Live bid get to see the outcome of the auction at its end, else they only get notified that the auction has ended.
- Failure on the Auctioneer's part to give a reply on the prompt to decide whether to accept the highest bid or not, would be regarded as an approval to sell to the highest bidder.
- Users are not advised to use a URL shortener as opposed to the demo, this was only stated for testing purposes as real NFTs must have a reliable media link to their NFT media file, as URL shortener providers could someday crash and their links rendered useless.
- 0xAuction is provided as a completely one-instance maintainable service, anyone can have their own instance and with many others connected to this one instance for the sake of having a pool of auctions in one place for others to bid upon, raising the likelihood of getting a bid. But at the same time, 0xAuction can be used for the sole purpose of auctioning a single asset, as long as the contract information where the asset was published is shared with others to connect to, to have access to the published auction.

We encourage you to play around with the dApp and create NFTs, auction NFTs or bid on items at 0xAuction's pool of auctions.

### Troubleshooting

- `docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?`

If you get the above error message:

Please run the following commands:

```sh
>> sudo service docker stop

>> sudo service docker start

>> REACH_CONNECTOR_MODE=ALGO ./reach react
```

- `Unable to connect with a different wallet on the same browser even after closing the browser and launching it back again`

On most browsers, simply clear the cookies used by `http://localhost:3000`, on Firefox, you can use the `Forget About This Site` feature, after right-clicking on `0xAuction | NFT Marketplace` on your `History` view.

- Should you encounter any other errors, please tag either `goonerlabs#1008` 0r `Emmanuel Agbavwe#2954` on [Reach's Discord server](https://bit.ly/3BnPyKd).

## The DApp

![Landing page](project_images/hero_view.png)  
![Features](project_images/feature_view.png)
![Sell](project_images/auction_view.png)
![Showcase](project_images/buy_latest_view.png)
![Auction Pool](project_images/buy_all_view.png)
![Seller](project_images/seller_view.png)
![Buyer No-Opt](project_images/buyer_not_opt_in.png)
![Buyer No-Opt](project_images/buyer_opt_in.png)

## Authors

- [Owolabi Adeyemi](https://github.com/goonerlabs)

- [Emmanuel Agbavwe](https://github.com/Aro1914)

## License

The 0xAuction project is licensed under the [Apache License, Version 2.0](./LICENSE).
