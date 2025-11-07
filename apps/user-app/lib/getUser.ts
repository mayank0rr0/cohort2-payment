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
        return data
    }
}