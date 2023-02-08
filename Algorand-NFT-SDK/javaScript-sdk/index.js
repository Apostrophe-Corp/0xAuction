import * as mainNet from './networks/mainnet.js'
import * as betaNet from './networks/betanet.js'
import * as testNet from './networks/testnet.js'
import { createAccount } from './main/main.js'

const loadNFTSDK = () => ({
	mainNet: { createAccount, ...mainNet },
	betaNet: { createAccount, ...betaNet },
	testNet: { createAccount, ...testNet },
})

export default loadNFTSDK
