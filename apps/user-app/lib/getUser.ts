import { prisma } from "@repo/db";
// import { cache } from "react";

export const getUser = async (id : string) => {
    if (id) {
        const data = await prisma.user.findFirst({
            where: { id : id },
            select : { 
                name: true,
                number: true,
                Balance : {
                select: {
                amount: true,
                locked: true
                }}, 
                OnRampTransaction: true}
        })

        const p2p = await prisma.p2pTransfer.findMany({
            where : {
                OR : [
                    { toUserId: id },
                    { fromUserId: id }
                ]
            },
            select: {
                id : true,
                timestamp: true,
                amount: true,
                toUserId: true,
                toUser: {
                    select : {
                        name: true,
                        number: true
                    }
                },
                fromUserId: true,
                fromUser: {
                    select : {
                        name: true,
                        number: true
                    }
                } 
            }
        })

        

        const list1 = data?.OnRampTransaction.filter(x => x.status == "Success").map((x) => {
            return {
                from : {
                    name: data.name,
                    num: data.number
                },
                to : {
                    name: x.provider,
                    num: null
                },
                amount : x.amount,
                time: x.startTime
            }}
        ) || [];
    
        const list2 = p2p.map(x => { 
            return {
                from : {
                    name: x.fromUser.name,
                    num: x.fromUser.number
                },
                to : {
                    name: x.toUser.name,
                    num: x.toUser.number
                },
                amount : x.amount,
                time: x.timestamp
            }
        })

        const tranxList = [...list1 , ...list2].sort((a, b) => {
            if (a.time > b.time) return -1;
            if (a.time < b.time) return 1;
            return 0;
        })

        return {data , p2p, tranxList}
    }
}