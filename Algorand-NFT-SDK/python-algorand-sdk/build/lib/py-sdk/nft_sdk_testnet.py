import base64
import json
from algosdk.v2client import algod, indexer
from algosdk import transaction, account, mnemonic
from config import algod_token, indexer_token, algod_address_testnet, indexer_address_testnet, admin_address, admin_key

algod_client = algod.AlgodClient(algod_token, algod_address_testnet)
indexer_client = indexer.IndexerClient(indexer_token, indexer_address_testnet)

def create_nft(name, symbol, metadata_url, manager="", reserve="", freeze="", clawback=""):
  """
  returns the id of the created NFT
  """
 
  metadata_bytes = json.dumps(metadata_url).encode()
  metadata_base_64 = base64.b64encode(metadata_bytes).decode()

  print("Your NFT metadata base64 hash: {}".format(metadata_base_64))

  # build unsigned transaction

  current_round = algod_client.status.get("lastRound")
  sp = algod_client.suggested_params(current_round, "").get("lastRound")

  txn = transaction.AssetConfigTxn(
    sender=admin_address,
    sp=sp,
    total=1,
    decimals=0,
    default_frozen=False,
    unit_name=symbol,
    asset_name=name,
    manager=manager,
    strict_empty_address_check=False,
    reserve=reserve,
    freeze=freeze,
    clawback=clawback,
    url=url,
    metadata_hash=metadata_bytes  
  )

  # sign transaction
  signed_txn = txn.sign(admin_key)

  #submit transaction
  txid = algod_client.send_transaction(signed_txn)

  print("Successfully sent transaction with txID: {}".format(txid))

  # wait for confirmation 
  try:
    confirmed_txn = transaction.wait_for_confirmation(algod_client, txid, 4)  
  except Exception as err:
    print(err)
    return False

  print("Transaction information: {}".format(json.dumps(confirmed_txn, indent=4)))

  print("Asset ID: {}".format(confirmed_txn["asset-index"]))

  return confirmed_txn["asset-index"]
 
 def verify_opt_in(address, asset_id):
   account_info = indexer_client.lookup_account_assets(address=address, asset_id=asset_id)
   
   if account_info.get("assets")[0].get("asset-id") == asset_id:
     return True
   else:
     return False
 
def claim_nft(address, asset_id):
  
  if (verify_opt_in(address=address, asset_id=asset_id)) == False:
    print("Asset with Id: {} has not yet been opted into by Wallet: {}. Please opt-in and try again").format(asset_id, address)
    return False
   
  sp = algod_client.suggested_params()
 
  txn = transaction.AssetTransferTxn(
    sender=admin_address,
    sp=sp,
    receiver=address,
    amt=1,
    index=asset_id  
  )
 
  signed_txn = txn.sign(admin_key)

  txid = algod_client.send_transaction(signed_txn)
  print("Successfully sent transaction with txID: {}".format(txid))

  try:
    confirmed_txn = transaction.wait_for_confirmation(algod_algod_client, txid, 4)

  except Exception as err:
    print(err)
    return False

  print("Transaction information: {}".format(json.dumps(confirmed_txn, indent=4)))

  return txid
 
def create_account():
  private_key, address = account.generate_account()
  print("My address: {}".format(address))
  print("My private key: {}".format(private_key))
  print("My passphrase: {}".format(mnemonic.from_private_key(private_key)))
  
  return address
 
def update_nft(asset_id, metadata_url):
  current_round = algod_client.status.get("lastRound")
  sp = algod_client.suggested_params(current_round, "").get("lastRound")
  
  metadata_bytes = json.dumps(metadata_url).encode()
  metadata_base_64 = base64.b64encode(metadata_bytes).decode()

  print("Your NFT metadata base64 hash: {}".format(metadata_base_64))

 
  txn = transaction.AssetConfigTxn(
    sender=admin_address,
    sp=sp,
    default_frozen=False,
    index=asset_id,
    url=metadata_url,
    metadata_hash=metadata_bytes 
  )
  
    # sign transaction
  signed_txn = txn.sign(admin_key)

  #submit transaction
  txid = algod_client.send_transaction(signed_txn)

  print("Successfully sent transaction with txID: {}".format(txid))

  # wait for confirmation 
  try:
    confirmed_txn = transaction.wait_for_confirmation(algod_client, txid, 4)  
  except Exception as err:
    print(err)
    return False

  print("Transaction information: {}".format(json.dumps(confirmed_txn, indent=4)))

  print("Asset ID: {}".format(confirmed_txn["asset-index"]))

  return confirmed_txn["asset-index"]
 
 
 
 
