"use server";

import { prisma } from "@repo/db"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"

export const createOnRampTransaction = async ( provider : string, amount: number) => {
        const session = await getServerSession(authOptions)
        if (!session?.user.id ) {
                return {
                        message: "Unauthenticated request"
                }
        } else {
                const token = String(Math.floor(Math.random() * 100000));
                try {
                        const transaction = await prisma.onRampTransaction.create({
                                data:{
                                        userId: session.user.id,
                                        token: token,
                                        amount: amount,
                                        provider: provider,
                                        startTime: new Date(),
                                        status : "Processing"
                                }
                        });
                        return {
                                message : "Done",
                                transaction_id: transaction.id
                        }
                } catch(e) {
                        console.error(e);
                        return {
                                message: "Error during Transaction"
                        }
                }
        }
}