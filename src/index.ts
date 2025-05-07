import { getMcpTssClient } from "./client"
import { createMpcTssWallet } from "./create-wallet"
import { signMessage } from "./sign-message"
import { generatePrivateKey } from "viem/accounts"

const DYNAMIC_ENVIRONMENT_ID = process.env.DYNAMIC_ENVIRONMENT_ID
const DYNAMIC_AUTH_TOKEN = process.env.DYNAMIC_AUTH_TOKEN

if (!DYNAMIC_ENVIRONMENT_ID || !DYNAMIC_AUTH_TOKEN) {
  throw new Error("DYNAMIC_ENVIRONMENT_ID and DYNAMIC_AUTH_TOKEN must be set")
}

async function main() {
  const secret = generatePrivateKey()

  console.log("Creating MPC Client ...")

  const tssClient = await getMcpTssClient({
    authToken: DYNAMIC_AUTH_TOKEN,
    environmentId: DYNAMIC_ENVIRONMENT_ID
  })

  console.log("Creating MPC Wallet ...")

  const wallet = await createMpcTssWallet(tssClient, secret)

  console.log("Signing Message 'Hello, world!' ...")

  const signature = await signMessage(
    tssClient,
    wallet.accountAddress,
    secret,
    "Hello, world!"
  )

  console.log(signature)
}

main().catch(console.error)
