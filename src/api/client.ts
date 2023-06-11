import { createClient } from "@unstoppablejs/client"
import { WellKnownChain } from "@substrate/connect"
import { ScProvider } from "@unstoppablejs/sc-provider"
import { storageClient } from "@unstoppablejs/substrate-bindings"

const smProvider = ScProvider(WellKnownChain.ksmcc3)
export const client = createClient(smProvider)
client.connect()

export const { getFromStorage, getKeys } = storageClient(client)
