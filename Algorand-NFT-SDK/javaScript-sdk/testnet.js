const { generateAccount } = require('algosdk')
const algosdk = require('algosdk')
const crypto = require('crypto')
const fs = require('fs')
const { createInflate } = require('zlib')

const algodTestnetServer = 'https://testnet-api.algonode.cloud'
const indexerTestnetServer = 'https://testnet-api.algonode.cloud'
const algodBetanetServer = 'https://betanet-api.algonode.cloud'
const indexerBetanetServer = 'https://betanet-idx.algonode.cloud'
const algodMainetServer = 'https://mainnet-api.algonode.cloud'
const indexerMainnetServer = 'https://mainnet-idx.algonode.cloud'
const algodPort = 443
const indexerPort = 443
const algodToken = ''
const indexerToken = ''

const adminAddress =
	'ONOL67X6NTUZSMWUQPNHZRFXCO7JK547YYJCSDQTI5V3BOFPPJRK73EFNA'
const mnemonic =
	'pink sound impulse project salt asset until leg glide kite inhale salt logic sell pull street gun viable outdoor electric funny club journey above estate'

const recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);

const adminKey = recoveredAccount.sk;

const algodClient = new algosdk.Algodv2(
	algodToken,
	algodTestnetServer,
	algodPort
)
const indexerClient = new algosdk.Indexer(
	indexerToken,
	indexerTestnetServer,
	indexerPort
)

const createAccount = function () {
	try {
		const myaccount = algosdk.generateAccount()
		console.log('Account Address = ' + myaccount.addr)
		let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk)
		console.log('Account Mnemonic = ' + account_mnemonic)
		console.log('Account created. Please store Mnemonic and address')
		console.log('Add funds to account using the TestNet Dispenser: ')
		console.log(
			'https://dispenser.testnet.aws.algodev.network/?account=' + myaccount.addr
		)

		return myaccount
	} catch (err) {
		console.log({ err })
	}
}

async function checkOptIn(address, assetId) {
	const accountInfo = await algodClient.accountInformation(address).do()
	const assets = accountInfo.assets
	// console.log({assets});

	let optInStatus = false
	for (const asset of assets) {
		// console.log({asset})
		if (asset['asset-id'] === parseInt(assetId)) {
			console.log(asset['asset-id'])
			optInStatus = true
			break
		}
	}
	return optInStatus
}

async function claimNFT(address, assetId) {
	const isOptIn = await checkOptIn(address, assetId)
	if (!isOptIn) {
		console.log(
			`Asset with Id: ${assetId} has not yet been opted into by Wallet: ${address}. Please opt-in`
		)
		return false
	}

	const sp = await algodClient.getTransactionParams().do()
	const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
		amount: 1,
		assetIndex: assetId,
		closeRemainderTo: undefined,
		from: adminAddress,
		note: undefined,
		rekeyTo: undefined,
		revocationTarget: undefined,
		suggestedParams: sp,
		to: address,
 })
	const signedTxn = txn.signTxn(adminKey)
	const tx = await algodClient.sendRawTransaction(signedTxn).do()
	console.log(`Successfully sent transaction with txID: ${tx.txId}`)

	const confirmedTxn = await algosdk.waitForConfirmation(
		algodClient,
		tx.txId,
		10
	)
	console.log(
		`Transaction information: ${JSON.stringify(confirmedTxn, null, 4)}`
	)
	console.log(`Transaction ID: ${tx.txId}`)

	return tx.txId
}

const verifyOptInBeforeTransfer = async (address, asset) => {
	new Promise((resolve) => {
		let waiter = undefined
		waiter = setInterval(async () => {
			const hasOptIn = await checkOptIn(address, asset) // true || false
			if (hasOptIn) {
				clearInterval(waiter)
				waiter = undefined
				resolve()
			}
		}, 5000)
	})
		.then(async () => {
			await claimNFT(address, asset)
		})
		.catch((error) => {
			console.log({ error })
		})
}

async function createNft({
	name = undefined,
	symbol = undefined,
	address = undefined,
	url = undefined,
	clawback = undefined,
	freeze = undefined,
} = {}) {
	if (name === undefined || symbol === undefined || url === undefined) {
		console.log('Argument missing required parameter')
		return
	}

	if (address === undefined) {
		generateAccount()
	}

	const sp = await algodClient.getTransactionParams().do()

	// todo create if statement to check if reserve and if reserve, build metadata hash else empty string
	const hash = crypto.createHash('sha256')
	hash.update(url)
	const digest = hash.digest()
	const hexDigest = digest.toString('hex')
	console.log(`Your metadata hash: ${hexDigest}`)

	const stringToUint8Array = (str) => {

		const utf8 = decodeURI(encodeURIComponent(str))

		const array = new Uint8Array(utf8.split('').map((item) => {

			return item.charCodeAt(0)

	}))

		return array

	}

	// function b64_to_utf8(str) { return decodeURIComponent((atob(str))); }
	
	const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
		// todo may change url p
		assetMetadataHash: stringToUint8Array(""),
		assetName: name,
		assetURL: url,
		clawback: clawback,
		decimals: 0,
		defaultFrozen: false,
		freeze: freeze,
		from: adminAddress,
		manager: adminAddress,
		reserve: undefined,
		suggestedParams: sp,
		total: 1,
		unitName: symbol,
		strictEmptyAddressChecking: false,
	})

	const rawSignedTxn = txn.signTxn(adminKey)

	let tx = await algodClient.sendRawTransaction(rawSignedTxn).do()
	console.log('Transaction : ' + tx.txId)
	let assetID = null
	// wait for transaction to be confirmed

	try {
		const confirmedTxn = await algosdk.waitForConfirmation(
			algodClient,
			tx.txId,
			10
		)

		// Get the new asset's information from the creator account
		let ptx = await algodClient.pendingTransactionInformation(tx.txId).do()
		assetID = ptx['asset-index']

		console.log(
			`Transaction information: ${JSON.stringify(confirmedTxn, null, 4)}`
		)
		console.log(`Asset ID: ${confirmedTxn["asset-index"]}`)
		console.log(`Please copy Asset ID and opt-in to the asset in your wallet.`)
	} catch (err) {
		console.error({ err })
		return false
	}
	verifyOptInBeforeTransfer(address, assetID)
}

// todo update nft function
async function updateNFT({
	assetId = undefined,
	reserve = undefined,
	clawback = undefined,
	freeze = undefined,
} = {}) {
	if (assetId === undefined || reserve === undefined) {
		console.log('Argument missing required parameter')
		return
	}

	const suggestedParams = await algosdk.algod.getTransactionParams()

	const txn = algosdk.makeAssetConfigTransaction(
		adminAddress,
		{
			index: assetId,
			manager: adminAddress,
			reserve: reserve,
			freeze: freeze,
			clawback: clawback,
			defaultFrozen: false,
			strictEmptyAddressChecking: false,
		},
		suggestedParams
	)

	const rawSignedTxn = txn.signTxn(adminKey)

	let tx = await algodClient.sendRawTransaction(rawSignedTxn).do()
	console.log('Transaction : ' + tx.txId)
	let assetID = null
	// wait for transaction to be confirmed

	try {
		const confirmedTxn = await algosdk.waitForConfirmation(
			algodClient,
			tx.txId,
			10
		)

		// Get the new asset's information from the creator account
		let ptx = await algodClient.pendingTransactionInformation(tx.txId).do()
		assetID = ptx['asset-index']

		console.log(
			`Transaction information: ${JSON.stringify(confirmedTxn, null, 4)}`
		)
		console.log(`Asset ID: ${confirmedTxn.txresults.createdasset}`)
	} catch (err) {
		console.error(err)
		return false
	}
}

