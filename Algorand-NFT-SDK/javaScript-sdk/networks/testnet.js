import {
	checkOptIn as iCheckOptIn,
	claimNFT as iClaimNFT,
	verifyOptInBeforeTransfer as iVerifyOptInBeforeTransfer,
	createNft as iCreateNft,
	updateNFT as iUpdateNFT,
} from '../main/main'
const algosdk = require('algosdk')

const algodTestnetServer = 'https://testnet-api.algonode.cloud'

const algodPort = 443
const algodToken = ''

const algodClient = new algosdk.Algodv2(
	algodToken,
	algodTestnetServer,
	algodPort
)

export const checkOptIn = async (address, assetId) => {
	return await iCheckOptIn(algodClient, address, assetId)
}

export const claimNFT = async (address, assetId) => {
	return await iClaimNFT(algodClient, address, assetId)
}

export const verifyOptInBeforeTransfer = async (address, assetId) => {
	return await iVerifyOptInBeforeTransfer(algodClient, address, assetId)
}

export const createNFT = async ({
	name = undefined,
	symbol = undefined,
	address = undefined,
	url = undefined,
	clawback = undefined,
	freeze = undefined,
} = {}) => {
	return await iCreateNft(algodClient, {
		name,
		symbol,
		address,
		url,
		clawback,
		freeze,
	})
}

export const updateNFT = async ({
	assetId = undefined,
	reserve = undefined,
	clawback = undefined,
	freeze = undefined,
} = {}) => {
	return await iUpdateNFT(algodClient, {
		assetId,
		reserve,
		clawback,
		freeze,
	})
}
