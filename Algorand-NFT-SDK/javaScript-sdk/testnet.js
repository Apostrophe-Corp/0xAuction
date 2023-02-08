const { generateAccount } = require('algosdk')
const algosdk = require('algosdk')
const crypto = require('crypto')
const fs = require('fs')
const { createInflate } = require('zlib')
const { encodeAddress } = require('algosdk/dist/cjs/encoding/address')
const { mnemonicToMasterDerivationKey } = require('algosdk/dist/cjs/mnemonic/mnemonic')

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
	'D4PTBMF3ZPLJBH3FYZMSTNFWM6UUFZMPXMQDMHHLGY3A6GNQHQWFAD57TY'
const adminKey =
	'192,231,27,120,72,160,96,192,195,95,215,125,202,96,180,9,59,168,69,164,155,112,94,89,203,44,233,5,119,189,76,202,31,31,48,176,187,203,214,144,159,101,198,89,41,180,182,103,169,66,229,143,187,32,54,28,235,54,54,15,25,176,60,44'
const adminMnemonic =
	'way hurdle despair afraid scout useless wrap struggle exile lobster surface rack expire badge tag identify cloth coin nose future unlock consider fame absorb tray'
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
		console.log('Account secret key = ' + myaccount.sk)
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

	let optInStatus = false
	for (const asset of assets) {
		if (asset.asset_id === parseInt(assetId)) {
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

	const params = algodClient.getTransactionParams()
	const txn = algosdk.makeAssetTransferTxn(
		address,
		[{ assetId: assetId, amount: 1 }],
		params
	)
	const signedTxn = txn.sign(adminKey)
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
		address = generateAccount()
	} else {
		// address = encodeAddress(address)
	}

	// const encodedAdminAddress = encodeAddress(adminAddress)

	const sp = await algodClient.getTransactionParams().do()

	// todo create if statement to check if reserve and if reserve, build metadata hash else empty string
	const hash = crypto.createHash('sha256')
	hash.update(url)
	const digest = hash.digest()
	const hexDigest = digest.toString('hex')
	console.log(`Your metadata hash: ${hexDigest}`)
	const utf8Digest = digest.toString('utf8')

	const stringTUint8Array = (str) => {
		const utf8 = decodeURI(encodeURIComponent(str))
		const array = new Uint8Array(
			utf8.split('').map((item) => item.charCodeAt(0))
		)
		return array
	}

	const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
		// todo may change url p
		assetMetadataHash: '',
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

	const rawSignedTxn = txn.signTxn(Buffer.from(adminKey, 'hex'))

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
		},
		suggestedParams
	)

	const rawSignedTxn = txn.signTxn((adminMnemonic))

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

;(async () => {
	await createNft({
		name: 'siju',
		symbol: 'SJ',
		url: 'https://bit.ly/3iLVoA3#i',
		address: 'KUJA3TRZXK2ZSDL6IGUSG2M3WMCK6MOKWJJJFBXGQI473KLVBL4SDQI54E',
	})
	// createAccount()
})()

// console.log('W4BERQ52RZILAKXNJJ6X5FNY3ASIAK3OV6KWX7DRTLKHXE7HNNGCO5OVUA'.length)
