import type { DynamicEvmWalletClient } from "@dynamic-labs-wallet/node-evm"

export async function signMessage(
  client: DynamicEvmWalletClient,
  address: string,
  secret: string,
  message: string
) {
  const serializedSignature = await client.signMessage({
    message,
    accountAddress: address,
    password: secret
  })

  return serializedSignature
}
