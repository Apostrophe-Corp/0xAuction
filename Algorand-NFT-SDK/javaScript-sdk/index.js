import * as mainNet from './networks/mainnet'
import * as betaNet from './networks/betanet'
import * as testNet from './networks/testnet'
import { createAccount, } from './main/main'

export const nftSDK = {
	mainNet: { createAccount, ...mainNet },
	betaNet: { createAccount, ...betaNet },
	testNet: { createAccount, ...testNet },
}
