"use client"
import { useTranxList } from "@repo/store";
import { Card } from "@repo/ui/card";
import { Title } from "@repo/ui/Title";
import { useSession } from "next-auth/react";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts"

export const GraphComponent = () => {
    const user = useSession()
    const tranxList = useTranxList((s) => s.tranxList);
    const tranx = tranxList.map((x) => {return {
        name: x.time.toDateString(),
        // Add one moe line of data by finding the initial money using db call
        // Show the spending trend through amount + that or - that
        out: x.from.name == user?.data?.user.name? x.amount : 0,
        in: x.to.name == user?.data?.user.name? x.amount : 0,
    }}).reverse();

    return <div className="w-full">
        <Card >
        <Title title="Spending Graph"/>
            <LineChart className="p-5"
            style={{ height: 400, width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
            responsive
            data={tranx}
            margin={{
                top: 20,
                right: 20,
                bottom: 5,
                left: 0,
            }}
            >
                <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="in" stroke="green" strokeWidth={2} name="Amount Received" />
                <Line type="monotone" dataKey="out" stroke="red" strokeWidth={2} name="Amount Sent" />
                <XAxis dataKey="name" />
                <YAxis width="auto" label={{ value: 'Amount', position: 'insideLeft', angle: -90 }} />
                <Legend align="right" />
            </LineChart>
        </Card>
    </div>
} 