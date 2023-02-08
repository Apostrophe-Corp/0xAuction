# py-algorand-nft-sdk

## Introduction

This SDK builds upon the py-algo-sdk NFT minting and updating capabilities, making it a lot easier for developers to create and update NFTs on testnet, betanet and mainnet
using the different ARC standards.

The developer simply needs to call the appropriate function to either mint or update an NFT, providing the necessary arguments including the metadata url in accordance with
the ARC standard they intend to use. 

### The ARC standards for NFTs include: 

- **ARC3**
  - <https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0003.md>
  - NFT metadata focused standard.
  - The url field points to the NFT metadata. The metadata supports a schema which can have associated integrity and mimetype fields. 
  - Suitable for immutable NFTs with large metadata files (>1KB size of JSON) and multiple off-chain data references.

- **ARC19**
  - <https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0019.md>
  - NFT metadata focused standard. 
  - Enforces off-chain IPFS metadata by using the url field as a template populated by the reserve address field which holds the IPFS CID. Easy to update since the reserve address value can be replaced with a single transaction, which in turn changes the metadata. The reserve address is only irrelevant (and thus can be used in this way) for pure NFTs (1 of 1).
  - Suitable for mutable NFTs intended to transition into immutable NFTs, with complete metadata (+mediafile) changes. 

- **ARC69**
  - <https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0069.md>
  - NFT mediafile focused standard. 
  - The url field points to the NFT digital asset file. The ASA metadata is stored on-chain and represented by the note field of the latest valid assetconfig transaction. Since the note field is limited to 1KB the metadata JSON is also restricted to this size. This design means fetching the metadata is complex and requires access to an archive node, but also allows metadata to be updated with a single transaction and simple access to the mediafile url.
  - Suitable for mutable NFTs where the mediafile is locked, easily accessed, but the compact metadata associated with it changes over time.

## Getting Started

### Prerequisites

At least Python 3.10

### Install

```sh
#create a virtual environment
python3 -m venv venv

#activate virtual environment
source venv/bin/activate

#update pip
pip install pip upgrade

#install py-algo-nft-sdk
pip install py-algo-nft-sdk

#install dependencies
pip3 install py-algorand-sdk

pip install asyncio

pip install promisio

```

## Usage

To use the SDK in your python script you simply need to follow the steps below.

### Step 1

**Import SDK**

```{python}
'''
import the file coresponding to the network that you intend to connect to and alias it.
Testnet: testnet
Betanet: betanet
Mainnet: mainnet
'''
from py_sdk import testnet as nft_sdk
```

### Step 2

**Call the function to mint an NFT**

create_nft(name, symbol, metadata_url, address, reserve="", freeze="", clawback="")

Descripton: This function mints a new NFT. 

Arguments:

Required :-
- name: This should be passed as a string and denotes the name of the NFT.
- symbol: This should be no more than 8 chararacters and passed as a string. It denotes symbol that would be associated with the NFT.
- metadata_url: This should be passed as a string and should be a URL pointing to a file where the NFT metadata such as an image is stored. If you wish for this NFT to be mutable, then the metadata_url passed must be in accordance with ARC-19 standards.

Optional :-
-address: This is an argument of type string and denotes the receiving address of the NFT(i.e) where the NFT would be stored after creation. If no Address is passed, then an address would be generated for the user and information about this address such as the secrete key, the public key and the mnemonic seed phrase would be printed out to the CLI. These must be copied and stored in a secure manner and later import the wallet to GUI such as [MyAlgo wallet] (https://wallet.myalgo.com/) or [Pera Algo wallet] (https://perawallet.app/) 

- reserve: the reserve address, this should only be passed if the user wants the NFT to be mutable. this address should be in accordance with ARC-19 standards.
- freeze: This is an argument of type string. It denotes a wallet that can sign a transaction to freeze the asset. It usually does not apply to NFTs.
- clawback: This is an argument of type string. It denotes a wallet that can reclaim an asset.

Side Effects:
-The function prints out the metadata hash, transaction ID, transaction information and the asset ID to the CLI.

Return:
-The function returns the NFT ID (success) or False (failure)

Example:
In this example, we create an NFT that can be updated (ARC-19 standard), but with no clawback or freeze address.

```{python}
nft_sdk.create_nft("exampleNFT", "EX", "https://bit.ly/3WlA41Y#i", True)
```

### Step 3

**Fund wallet and Opt-in to asset**

-The User or receiver of the NFT must opt-in to the NFT in their wallet by adding the asset ID generated in the previous step to their wallet.
-The user must also have few algos in their wallet. You can get algos from the [testnet dispenser] (https://testnet.algoexplorer.io/dispenser) . 


**You can also use the utility function verify_opt_in() to ensure that the receiver address has opted in to the asset before moving on to the next step.**

verify_opt_in(address, asset_id)

Description: checks if an adderess has opted-in to an asset.

Arguments:

Required:-
-address: This is an argument of type string. It denotes the wallet to be checked for an opt-in for a particular asset.
-asset_id: This is passed an an integer. It denotes the asset ID of the asset to be checked.

Side Effects: None

Return:
-True (if the wallet has opted in) else False.

Example:
```{python}
nft_sdk.verify_opt_in("BKULWP4WWNEFJRAUEZJD4RCWQ6G4XVH24MZINYOHB76SF2MTMFEOM5CABY", 156938060)
```

**You can also use the utility function create_account() to generate a new account**
create_account()

Description: Creates a new account.

Arguments: Takes no arguments.

Side Effects:
-Prints the public key (wallet address), private key and mnemonic seed phrase to the CLI.

Return:
-The public key / wallet address.

Example:
'''{python}
nft_sdk.create_account()
'''
This function prints out the account information which you can then copy from the CLI and store in a safe place and later import the wallet to GUI such as [MyAlgo wallet] (https://wallet.myalgo.com/) or [Pera Algo wallet] (https://perawallet.app/) 



### Optional Step
**This step is only required when a user wants to update a mutable NFT. Remember that an NFT is only mutable if the metadata_url passed while creating the NFT was created and passed as specified by the ARC-19 standard.**

update_nft(asset_id, clawback="", freeze="", reserve="")

Descripton: This function updates an NFT. 

Arguments:

Required :-
- asset_id: this is of type integer and denotes the NFT the user wants to mutate.

Optional :-
- freeze: This is an argument of type string. It denotes a wallet that can sign a transaction to freeze the asset. It usually does not apply to NFTs.
- clawback: This is an argument of type string. It denotes a wallet that can reclaim an asset.
- reserve: This must be in accordance with ARC-19 standards in order to mutate the NFT.

Side Effects:
-The function prints out the metadata hash, transaction ID, transaction information and the asset ID to the CLI.

Return:
-The function returns the NFT ID (success) or False (failure)

Example:

```{python}
nft_sdk.update_nft(156938060, <reserve address>)
```

## Authors

Owolabi Adeyemi
Emmanuel Agbavwe

## Acknowledgements 

Barnji
  
Nullun

Nick Stanford
  
Joe Polony

JP Miller
  
The ALgorand foundation and the awesome Green House Hacks Team
