import { getIdentitySuperOfFromKey, identitySuperofKeys$ } from "@/api"
import {
  firstValueFrom,
  lastValueFrom,
  mergeAll,
  mergeMap,
  toArray,
} from "rxjs"
import { newHeads$ } from "./api/generated/chain"

// let's wait until smoldot has synced
await firstValueFrom(newHeads$)
console.log("smolodot is now synced! Starting to pull data...")

const startTime = Date.now()

// let's pull all the available "super identities"
const superIdentities = await lastValueFrom(
  identitySuperofKeys$.pipe(
    mergeAll(),
    mergeMap(getIdentitySuperOfFromKey),
    toArray(),
  ),
)

const endTime = Date.now()

console.log(superIdentities)
console.log(
  `=============== took ${endTime - startTime} milliseconds. ===============`,
)
process.exit(0)
