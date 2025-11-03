import { Card } from "@repo/ui/card" 
import { Title } from "@repo/ui/Title"
import { Input } from "@repo/ui/Input"
import { Select } from "@repo/ui/Select"
import { Button } from "@repo/ui/button"
import { Center } from "@repo/ui/Center"

export const AddMoneyCard = () => {

    return <div>
        <Card>
            <Title title="Add Money"/>
            <Input name="Amount" />
            <Select title="Bank" options={[{name: "HDFC Bank", value: "hdfc"}]} />
            <Center>
                <Button >
                    Submit 
                </Button>
            </Center>
        </Card>
    </div>
} 