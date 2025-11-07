"use client"

import { useTranx } from "@repo/store";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/Center";
import { Title } from "@repo/ui/Title";
import { TranxCard } from "@repo/ui/TranxCard";

export const OnRampCard = () => {
    const transactions = useTranx((s) => s.transactions.reverse())

    return <div>
        <Card>
            <Title title="On Ramp Card" />
            <div className="h-[20vh] overflow-y-scroll oveflow-x-hidden">
                { transactions.length > 0 ? 
                    transactions.map((x) => <div key={x.id}> 
                        <TranxCard amount={x.amount} provider={x.provider} startTime={x.startTime} status={x.status}/> 
                    </div>) : 
                    <Center> 
                        <div className="text-md font-light font-sans">No Recent transactions</div>
                    </Center>
                    }
            </div>
        </Card>
    </div>
} 