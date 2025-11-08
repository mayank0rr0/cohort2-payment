import { prisma } from "@repo/db";
// import { cache } from "react";

export const getUser = async (id : string) => {
    if (id) {
        const data = await prisma.user.findFirst({
            where: { id : id },
            select : { Balance : {
                select: {
                amount: true,
                locked: true
                }
            }, OnRampTransaction: true}
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
        return {data , p2p}
    }
}