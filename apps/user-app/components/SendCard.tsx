"use client"
import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import { Center } from "@repo/ui/Center"
import { Input } from "@repo/ui/Input"
import { Title } from "@repo/ui/Title"
import { useState } from "react"
import createP2PTransaction from "../lib/actions/createP2PTransfer"

export const SendCard = () => {
    const [num, setNum] = useState('');
    const [amount, setAmount] = useState('');

    return <div className="w-full px-4">
                <Card>
                    <Title title="Send"/>
                    <Input onChange={setNum} name="Number" fieldType="text" />
                    <Input onChange={setAmount} name="Amount"/>
                    <Center>
                        <Button onClick={async () => {
                            const data = await createP2PTransaction(amount, num);
                            alert(data?.message)
                        }}>
                            Send
                        </Button>
                    </Center>
                </Card>
            </div>    
}