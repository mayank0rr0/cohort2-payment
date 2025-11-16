"use server"
import { prisma } from "@repo/db";
import type { Balance } from "@repo/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

 export default async function createP2PTransaction (amount : string, number: string ) {
    const session = await getServerSession(authOptions);
    
    // Getting id from session object for current user / sender
    const from = session?.user.id
    // Checking if logged in
    if (!from) {
        return {
            message: "Not a valid request"
        }
    }

    // getting receiver using number and checking for existence
    const to = await prisma.user.findUnique({
        where: {
            number: number
        },
        select: {
            id: true
        }
    })
    
    if (!to?.id || to?.id == from) {
        return {
            message : "Receiver Not Found or Invalid Receiver"
        }
    }
    
    return prisma.$transaction( async (tx) => {
        // Locking rows when performing transactions rather than
        // const fromBalance = await tx.balance.findUnique({where: {userId: from,}}) 

        const fromBalance = await prisma.$queryRaw<Balance>`SELECT * FROM "Balance" WHERE "userId" = ${from} FOR UPDATE;`

        if ( !fromBalance || fromBalance?.amount < Number(amount)) {
            return {
                message: "Insufficient Balance"
            }
        }

        // Following 2 can lead to negative balance in race conditions
        // if where: { amount: fromBalance.amount } -- is not used in update balance of "from"
        // this is called Optimistics Concurrency Control
        // an alternative of LOCKING for cross DB usage + moderate concurrency
        
        await tx.balance.update({
            where: {userId : from, amount: fromBalance.amount},
            data: {amount: {decrement: Number(amount)}}
        })

        await tx.balance.update({
            where: {userId: to.id},
            data: {amount: {increment: Number(amount)}}
        })

        await tx.p2pTransfer.create({
            data: {
                toUserId: to.id,
                fromUserId: from,
                timestamp: new Date(),
                amount: Number(amount)
            }
        })

        return {
            message : "Transaction Successful"
        }
    })
}
 