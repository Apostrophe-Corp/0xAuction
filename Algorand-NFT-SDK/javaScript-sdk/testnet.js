const { generateAccount } = require("algosdk");
const algosdk = require("algosdk");
const crypto = require("crypto");
const fs = require("fs");
const { createInflate } = require("zlib");

const algodTestnetServer = "https://testnet-api.algonode.cloud";
const indexerTestnetServer = "https://testnet-idx.algonode.cloud"
const algodBetanetServer = "https://betanet-api.algonode.cloud";
const indexerBetanetServer = "https://betanet-idx.algonode.cloud"
const algodMainetServer = "https://mainnet-api.algonode.cloud";
const indexerMainnetServer = "https://mainnet-idx.algonode.cloud"
const algodPort = 443;
const indexerPort = 443;
const algodToken = "";
const indexerToken = ""

adminAddress = "W4BERQ52RZILAKXNJJ6X5FNY3ASIAK3OV6KWX7DRTLKHXE7HNNGCO5OVUA"
adminKey = "3d43u0uywHWdackLRDwgZA8cBqpb2FxUJECl36fhcvS3AkjDuo5QsCrtSn1+lbjYJIArbq+Va/xxmtR7k+drTA=="

const algodClient = new algosdk.Algodv2(algodToken, algodTestnetServer, algodPort)
const indexerClient = new algosdk.Indexer(indexerToken, indexerTestnetServer, indexerPort);

const createAccount = function () {
  try {
    const myaccount = algosdk.generateAccount();
    console.log("Account Address = " + myaccount.addr);
    let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
    console.log("Account Mnemonic = " + account_mnemonic);
    console.log("Account created. Please store Mnemonic and address");
    console.log("Add funds to account using the TestNet Dispenser: ");
    console.log(
      "https://dispenser.testnet.aws.algodev.network/?account=" + myaccount.addr
    );

    return myaccount;
  } catch (err) {
    console.log("err", err);
  }
};


async function createNft (name, symbol, address, imageUrl, reserve, clawback, freeze) {

 
 // todo hash url and log it to the console

 if (address === undefined) {
  generateAccount();    
  } 

 const sp = await algodClient.getTransactionParams().do();

 // todo create if statement to check if reserve and if reserve, build metadata hash else empty string 
 const reserveHash = "";

 const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
  // todo may change url p
  assetMetadataHash: imageUrl,
  assetName: name,
  assetURL: imageUrl,
  clawback: clawback ? clawback : "",
  decimals: 0,
  defaultFrozen: false,
  freeze: freeze ? freeze : "",
  from: adminAddress,
  manager: adminAddress,
  reserve: reserveHash,
  suggestedParams: sp,
  total: 1,
  unitName: symbol,
 });

 const rawSignedTxn = txn.signTxn(adminKey);

 let tx = (await algodClient.sendRawTransaction(rawSignedTxn).do());
 console.log("Transaction : " + tx.txId);
 let assetID = null;
 // wait for transaction to be confirmed
 // await waitForConfirmation(algodClient, tx.txId);
 // Get the new asset's information from the creator account
 let ptx = await algodClient.pendingTransactionInformation(tx.txId).do();
 assetID = ptx["asset-index"];
 console.log("AssetID = " + assetID);

 // todo verify optin

 // todo transfer nft

}

// todo update nft function 