/** Fetches and parses ARC69 metadata for Algorand NFTs. */
export class Arc69 {
	constructor() {
		this.algoExplorerApiBaseUrl = {
			TestNet: 'https://algoindexer.testnet.algoexplorerapi.io',
			MainNet: 'https://algoindexer.algoexplorerapi.io',
		}['TestNet']
	}

	async fetch(assetId) {
		// Fetch `acfg` transactions.
		let assetInfo = {}
		const arc69Fetch = async (assetId) => {
			const url = `${this.algoExplorerApiBaseUrl}/v2/transactions?asset-id=${assetId}&tx-type=acfg`
			let transactions
			try {
				const transitTransactions = await fetch(url, {
					Headers: {
						Origin: 'https://ipfs.io',
					},
				}).then((res) => res.json())
				// console.log(transitTransactions)
				transactions = transitTransactions.transactions
			} catch (err) {
				// console.error(err)
				return { success: false }
			}

			// Sort the most recent `acfg` transactions first.
			transactions.sort((a, b) => b['round-time'] - a['round-time'])

			// Attempt to parse each `acf` transaction's note for ARC69 metadata.
			const rData = {}
			for (const transaction of transactions) {
				try {
					// const noteBase64 = transaction.note
					// const noteString = atob(noteBase64)
					// 	.trim()
					// 	.replace(/[^ -~]+/g, '')
					// const noteObject = JSON.parse(noteString)
					// if (noteObject.standard === 'arc69') {
					// 	return noteObject
					// }
					const params = transaction['asset-config-transaction']['params']
					if (params['name']) {
						rData['name'] = params['name']
					}
					if (params['unit-name']) {
						rData['unit-name'] = params['unit-name']
					}
					if (params['url']) {
						if (params['url'].indexOf('ipfs://') === 0) {
							params['url'] =
								'https://gateway.ipfs.io/ipfs/' + params['url'].slice(7)
						}
						rData['url'] = params['url']
					}
					return Object.keys(rData).length ? { success: true, ...rData } : {}
				} catch (err) {
					// Oh well...
					return {}
				}
			}
		}

		const algoExplorerFetch = async (assetId) => {
			const assetInfo = await fetch(
				`https://indexer.testnet.algoexplorerapi.io/v2/assets/${assetId}`
			)
				.then((res) => res.json())
				.then(
					(res) =>
						({ ...res?.asset?.params, success: true } ?? { success: false })
				)
				.catch((error) => ({ success: false }))
			return assetInfo
		}

		const algoNodeFetch = async (assetId) => {
			const assetInfo = await fetch(
				`https://testnet-idx.algonode.cloud/v2/assets/${assetId}?include-all=true`
			)
				.then((res) => res.json())
				.then(
					(res) =>
						({ ...res?.asset?.params, success: true } ?? { success: false })
				)
				.catch((error) => ({ success: false }))
			return assetInfo
		}

		assetInfo = await algoNodeFetch(assetId)
		if (!Object.keys(assetInfo).length)
			assetInfo = await algoExplorerFetch(assetId)
		if (!Object.keys(assetInfo).length) assetInfo = await arc69Fetch(assetId)
		return Object.key(assetInfo).length
			? { success: true, ...assetInfo }
			: { success: false }
	}
}
