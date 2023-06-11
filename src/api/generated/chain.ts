import { client } from "../client"
import { from } from "rxjs"

export const newHeads$ = from(
  client.getObservable<any>(
    "chain_subscribeNewHeads",
    "chain_unsubscribeNewHeads",
    [],
  ),
)
