"use client"

import { Card } from "@repo/ui/card" 
import { Title } from "@repo/ui/Title"
import { Input } from "@repo/ui/Input"
import { Select } from "@repo/ui/Select"
import { Button } from "@repo/ui/button"
import { Center } from "@repo/ui/Center"
import { useTransfer } from "@repo/store"
import { createOnRampTransaction } from "../lib/actions/createOnRampTransaction"

export const AddMoneyCard = () => {
    const options = useTransfer((s) => s.options);

    // state update functions
    const updateProvider = useTransfer((s) => s.updateProvider);
    const updateAmount = useTransfer((s) => s.updateAmount);
    
    // states for user input
    const amount = useTransfer((s) => s.amount);
    const selectedProvider = useTransfer((s) => s.selectedProvider);

    console.log(amount, selectedProvider)

    return <div>
        <Card>
            <Title title="Add Money"/>
            <Input onChange={updateAmount} name="Amount" />
            <Select onChange={updateProvider} title="Bank" options={options} />
            <Center>
                <Button onClick={() => {
                    createOnRampTransaction(selectedProvider.name, amount)
                    // window.location.href = selectedProvider.url
                }}>
                    Submit  
                </Button>
            </Center>
        </Card>
    </div>
} 