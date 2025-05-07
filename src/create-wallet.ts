import type { DynamicEvmWalletClient } from "@dynamic-labs-wallet/node-evm"

export async function createMpcTssWallet(
  client: DynamicEvmWalletClient,
  secret: string
) {
  const {
    accountAddress,
    rawPublicKey,
    publicKeyHex,
    externalServerKeyShares
  } = await client.createWalletAccount({
    thresholdSignatureScheme: "TWO_OF_TWO",
    password: secret,
    onError: (error: Error) => {
      // handle error
      console.error(error)
      throw error
    }
  })

  return {
    accountAddress,
    rawPublicKey,
    publicKeyHex,
    externalServerKeyShares
  }
}
