import { Card } from "@repo/ui/card" 
import { Title } from "@repo/ui/Title"
import { Input } from "@repo/ui/Input"

export const AddMoneyCard = () => {
    return <div>
        <Card>
            <Title title="Add Money"/>
            <Input name="Amount"/>
        </Card>
    </div>
} 