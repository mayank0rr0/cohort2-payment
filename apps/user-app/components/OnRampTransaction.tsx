"use client"

import { useTranx } from "@repo/store";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/Center";
import { Title } from "@repo/ui/Title";

export const OnRampCard = () => {
    const transactions = useTranx((s) => s.transactions)

    return <div>
        <Card>
            <Title title="On Ramp Card" />
            <div className="min-h-30">
                { transactions.length > 0 ? 
                    transactions.map((x) => <div key={x.id}> {x.amount} {/* implement a list componnent here */} </div>) : 
                    <Center> 
                        <div className="text-md font-light font-sans">No Recent transactions</div>
                    </Center>
                    }
            </div>
        </Card>
    </div>
} 