import { Card } from "@repo/ui/card" 
import { Center } from "@repo/ui/Center"
import { Title } from "@repo/ui/Title"

export const OnRampCard = () => {
    return <div>
        <Card>
            <Title title="On Ramp Card" />
            <div className="h-30">
                <Center>
                    <div className="text-md font-light font-sans">
                        No Recent Transactions
                    </div>
                </Center>
            </div>
        </Card>
    </div>
} 