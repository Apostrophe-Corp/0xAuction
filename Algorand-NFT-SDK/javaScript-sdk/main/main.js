const { generateAccount } = require('algosdk')
const algosdk = require('algosdk')
const crypto = require('crypto')

const adminAddress =
	'ONOL67X6NTUZSMWUQPNHZRFXCO7JK547YYJCSDQTI5V3BOFPPJRK73EFNA'
const mnemonic =
	'pink sound impulse project salt asset until leg glide kite inhale salt logic sell pull street gun viable outdoor electric funny club journey above estate'

const recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);

const adminKey = recoveredAccount.sk;


export const createAccount = function () {
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

export async function checkOptIn(algodClient, address, assetId) {
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

export async function claimNFT(algodClient, address, assetId) {
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

export const verifyOptInBeforeTransfer = async (algodClient, address, asset) => {
	new Promise((resolve) => {
		let waiter = undefined
		waiter = setInterval(async () => {
			const hasOptIn = await checkOptIn(algodClient, address, asset) // true || false
			if (hasOptIn) {
				clearInterval(waiter)
				waiter = undefined
				resolve()
			}
		}, 5000)
	})
		.then(async () => {
			await claimNFT(algodClient, address, asset)
		})
		.catch((error) => {
			console.log({ error })
		})
}

export async function createNft(
	algodClient,
	{
		name = undefined,
		symbol = undefined,
		address = undefined,
		url = undefined,
		clawback = undefined,
		freeze = undefined,
	} = {}
) {
	if (name === undefined || symbol === undefined || url === undefined) {
		console.log('Argument missing required parameter')
		return
	}

	if (address === undefined) {
		generateAccount()
	}

	const sp = await algodClient.getTransactionParams().do()

	const hash = crypto.createHash('sha256')
	hash.update(url)
	const digest = hash.digest()
	const hexDigest = digest.toString('hex')
	console.log(`Your metadata hash: ${hexDigest}`)
	const metadata = new Uint8Array(digest)

	// function b64_to_utf8(str) { return decodeURIComponent((atob(str))); }

	const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
		assetMetadataHash: metadata,
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
		console.log(`Asset ID: ${confirmedTxn['asset-index']}`)
		console.log(`Please copy Asset ID and opt-in to the asset in your wallet.`)
	} catch (err) {
		console.error({ err })
		return false
	}
	verifyOptInBeforeTransfer(algodClient, address, assetID)
}

// todo update nft function
export async function updateNFT(
	algodClient,
	{
		assetId = undefined,
		reserve = undefined,
		clawback = undefined,
		freeze = undefined,
	} = {}
) {
	if (assetId === undefined) {
		console.log('Argument missing required parameter')
		return
	}

	const sp = await algodClient.getTransactionParams().do()

	const txn = algosdk.makeAssetConfigTxnWithSuggestedParamsFromObject({
		from: adminAddress,
		note: undefined,
		assetIndex: assetId,
		rekeyTo: undefined,
		manager: adminAddress,
		reserve: reserve,
		freeze: freeze,
		clawback: clawback,
		defaultFrozen: false,
		strictEmptyAddressChecking: false,
		suggestedParams: sp,
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

		console.log(
			`Transaction information: ${JSON.stringify(confirmedTxn, null, 4)}`
		)
	} catch (err) {
		console.error(err)
		return false
	}
}

// createNft({name: "labi", symbol: "LA", url: "https://bit.ly/3iLVoA3#i", address: "BKULWP4WWNEFJRAUEZJD4RCWQ6G4XVH24MZINYOHB76SF2MTMFEOM5CABY"}) 

// updateNFT({assetId: 157737372, clawback: 'BKULWP4WWNEFJRAUEZJD4RCWQ6G4XVH24MZINYOHB76SF2MTMFEOM5CABY'})
