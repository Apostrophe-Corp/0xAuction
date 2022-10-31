# 0xAuction 
This project was created for the Greenhouse hack 2, organized by Algorand and hosted on Gitcoin.

The DApp allows users to create NFTs, Auction NFTs and buy NFTs and other collectibles by submitting bids for them. 

Users can start an auction for the NFTs they own and other users can bid on them. Users can also optionally opt in to see the current highest bid for each auction. The Nft and current highest bid are always held in escrow by the contract and lesser bids previously made are returned to the respective bidders and new bids less than the highest bid are rejected.

The end game is for users to be able to create, buy and sell NFTs and other collectibles.

Getting Started
Pre-requisites and Local Development
Developers using this DApp should already have Reach, Docker and Node installed on their local machines.

The guidelines for installation can be found below
Instructions for installing Reach and Docker
Instructions for installing Node
In addition, they should have an Algorand wallet (preferably Pera Algo Wallet) installed on their phone and loaded with Testnet Algos in order to be able to sign transactions and share their NFts and bid on auctions. The wallet can be installed from the App store (i-Phone) or Google Play (Android) as is appropiate.

You can some testnet Algos from the Algo Faucet.

Running the DApp
We recommend running the DApp using Ubuntu20.04 terminal.

Steps
Fork the Repository.

Clone the Repository.

Change Directory (cd) into the directory.

Run the following commands to start up the app:

npm install
./reach react
Usage
Please be aware that you would have to sign multiple transactions on your mobile device while going through most of the steps below.

Open a few tabs in your favourite browser (we recommend at least 3 tabs).

Navigate to the app at the URL http://localhost:3000.

Click on the Connect Wallet button to activate wallet connect and scan the QR code.

Click on the Deploy button to deploy the contract as an Admin in the first tab.

Copy the contract information to the clipboard by clicking on the Copy to Clipboard button and then head on over to the next tab and follow steps 1 - 3 after which you can attach to the contract as a new user by clicking on Attach and pasting the contract information and clicking on the the button to attach.

You would then have the oportunity to create an nft, host an auction or buy an NFT.

Please join in another browser and attach as per the steps above after which you can start an auction or bid on an auction by following the same steps.


We encourage you to play around with the DApp and create NFTs, Auction NFTs or bid on items at auctions.

Troubleshooting
Module not found: can't reslove 'react-icons/im'
If you get the error below:

example

Please run the following commands:

npm install react-icons
./reach react
docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
If you get the error below:

example2

Please run the following commands:

sudo service docker stop
sudo service docker start
./reach react
Should you encounter any other errors, please tag either goonerlabs#1008 0r Emmanuel Agbavwe#2954 in the help channel of the Reach Discord Server.

The DApp
The Landing page
welcome to the hub

The Proposals Page
Proposals

The Bounties Page
Bounties

Authors
Owolabi Adeyemi
Emmanuel Agbavwe
Acknowledgements
JP Miller
Nick Stanford
And the Reach team, the Algorand Foundation and Gitcoin.
Contributing
This project is open to contributions from great minded developers who share our goal to make development easier, and to bring more developers into Web3 through the Reach Lang and by building on the Algorand network.

To contribute, simply:

Fork this repo, make your updates and additions.
Create a GitHub discussion and bring your new ideas to our notice.
Once approved, set up a pull request.
After revision, your name will forever be among the wonderful develpers who contributed to building the 0xAuction.
