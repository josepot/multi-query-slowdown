import { _void } from "scale-ts"
import {
  AccountId,
  blake2128Concat,
  storageKeys,
} from "@unstoppablejs/substrate-bindings"
import { getFromStorage, getKeys } from "../client"

const identity = storageKeys("Identity")

// Identity.SuperOf
export const getIdentitySuperOfFromKey = (key: string) =>
  getFromStorage(key, superOfDecoder)

const b = AccountId(2)

const superOfArgs = identity("SuperOf", blake2128Concat(b.enc))
const superOfDecoder = b.dec

export const getIdentitySuperOf = (validator: string) =>
  getIdentitySuperOfFromKey(superOfArgs(validator))

const superOfRootKey = identity("SuperOf")()
export const identitySuperofKeys$ = getKeys(superOfRootKey)
