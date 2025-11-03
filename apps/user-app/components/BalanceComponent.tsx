import { Card } from "@repo/ui/card" 
import { Title } from "@repo/ui/Title"
import { TableItem } from "@repo/ui/TableItem"


export const BalanceCard = () => {
    return <div>
        <Card>
            <Title title="Balance List" />
            <TableItem name="Unlocked Balance" value="0 INR"/>
            <TableItem name="Total Locked Balance" value="0 INR"/>
            <TableItem name="Total Balance" value="0 INR"/>
        </Card>
    </div>
} 