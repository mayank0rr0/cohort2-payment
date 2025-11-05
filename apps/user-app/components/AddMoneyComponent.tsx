"use client"

import { Card } from "@repo/ui/card" 
import { Title } from "@repo/ui/Title"
import { Input } from "@repo/ui/Input"
import { Select } from "@repo/ui/Select"
import { Button } from "@repo/ui/button"
import { Center } from "@repo/ui/Center"
import { useTransfer } from "@repo/store"

export const AddMoneyCard = () => {
    const options = useTransfer((s) => s.options);

    // state update functions
    const updateUrl = useTransfer((s) => s.updateUrl);
    const updateAmount = useTransfer((s) => s.updateAmount);
    
    // states for user input
    const amount = useTransfer((s) => s.amount);
    const selectedUrl = useTransfer((s) => s.selectedUrl);

    console.log(amount, selectedUrl)

    return <div>
        <Card>
            <Title title="Add Money"/>
            <Input onChange={updateAmount} name="Amount" />
            <Select onChange={updateUrl} title="Bank" options={options} />
            <Center>
                <Button onClick={() => {
                    // implement redirect on button click
                }}>
                    Submit  
                </Button>
            </Center>
        </Card>
    </div>
} 