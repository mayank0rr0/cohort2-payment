"use client"
import { Card } from "@repo/ui/card"; 
import { Title } from "@repo/ui/Title";
import { TableItem } from "@repo/ui/TableItem";
import { useBalance } from "@repo/store";



export const BalanceCard = () => {
    const amount = useBalance((s) => s.amount);
    const locked = useBalance((s) => s.locked);
    const total = useBalance((s) => s.locked + s.amount); // using selector

    return <div>
        <Card>
            <Title title="Balance List" />
            <TableItem name="Unlocked Balance" value={amount + " INR"}/>
            <TableItem name="Total Locked Balance" value={locked + " INR"}/>
            <TableItem name="Total Balance" value={ total + " INR"}/>
        </Card>
    </div>
} 