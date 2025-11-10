import { Card } from "@repo/ui/card"
import { BalanceCard } from "./BalanceComponent"
import { TranxListCard } from "./TranxListCard"

export const DashboardComponent = () => {
    return <div className="flex gap-5 flex-col">
        <BalanceCard />
        <Card>
            <TranxListCard />
        </Card>
    </div>
}