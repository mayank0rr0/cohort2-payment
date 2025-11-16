"use client"

import { Card } from "@repo/ui/card" 
import { Title } from "@repo/ui/Title"
import { Input } from "@repo/ui/Input"
import { Select } from "@repo/ui/Select"
import { Button } from "@repo/ui/button"
import { Center } from "@repo/ui/Center"
import { useTransfer } from "@repo/store"
import { createOnRampTransaction } from "../lib/actions/createOnRampTransaction"
import { useEffect, useState } from "react"
import { AlertBox } from "@repo/ui/AlertBox"

export const AddMoneyCard = () => {
    const options = useTransfer((s) => s.options);
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 10000);}, [show, message])
        
    

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
            <Input onChangeNum={updateAmount} name="Amount" />
            <Select onChange={updateProvider} title="Bank" options={options} />
            <Center>
                <Button onClick={async () => {
                    const data = await createOnRampTransaction(selectedProvider.name, amount)
                    setShow(true)
                    setMessage(data?.message)
                    // window.location.href = selectedProvider.url
                }}>
                    Submit  
                </Button>
            </Center>
        </Card>
        {show ? <AlertBox message={message} /> : null }
    </div>
} 