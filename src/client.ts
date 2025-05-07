import { DynamicEvmWalletClient } from "@dynamic-labs-wallet/node-evm"

const BASE_API_URL = "https://app.dynamicauth.com"
const MPC_RELAY_URL = "relay.dynamic-preprod.xyz"

const authenticatedEvmClient = async ({
  authToken,
  environmentId,
  baseApiUrl,
  baseMPCRelayApiUrl
}: {
  authToken: string
  environmentId: string
  baseApiUrl?: string
  baseMPCRelayApiUrl?: string
}) => {
  const client = new DynamicEvmWalletClient({
    authToken,
    environmentId,
    baseApiUrl: BASE_API_URL,
    baseMPCRelayApiUrl: MPC_RELAY_URL
  })
  await client.authenticateApiToken(authToken)
  return client
}

interface GetMcpTssClientParams {
  authToken: string
  environmentId: string
}

export function getMcpTssClient({
  authToken,
  environmentId
}: GetMcpTssClientParams) {
  return authenticatedEvmClient({
    authToken,
    environmentId
  })
}
