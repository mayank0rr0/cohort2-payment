"use client"
import { TransferCard } from "@repo/ui/TransferCard"
import { Title } from "@repo/ui/Title"
import { useSession } from "next-auth/react"
import { useP2P } from "@repo/store"


export const P2PTxn = () => {
    const session = useSession()
    const p2pTransfers = useP2P((s) => s.p2pTransfers)

    return <div className="h-full p-10">
            <Title title="Transfer History" />
            <div className="pt-4 flex flex-col gap-4">
                {p2pTransfers.map((x) => <div key={x.id}>
                    <TransferCard tranx={x}  id={session.data?.user.id || ""}/>
                </div>)}
            </div>
    </div>
}
