"use client"
import { TransferCard } from "@repo/ui/TransferCard"
import { Title } from "@repo/ui/Title"
import { useSession } from "next-auth/react"
import { useP2P } from "@repo/store"


export const P2PTxn = () => {
    const session = useSession()
    const p2pTransfers = useP2P((s) => s.p2pTransfers).reverse()

    return <div className="h-[69vh] p-5 pb-15 w-full">
            <Title title="Transfer History" />
            <div className="pt-4 flex flex-col gap-4 overflow-y-auto noscrollbar h-full">
                {p2pTransfers.map((x) => <div key={x.id}>
                    <TransferCard tranx={x}  id={session.data?.user.id || ""}/>
                </div>)}
            </div>
    </div>
}
