 /// FILLL this up

import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";

 export default async function createP2PTransaction (amount : string, number: string ) {
    const session = await getServerSession();
    const transaction = await prisma.$transaction([
        prisma.user.update({
            where: {id: session?.user?.id},
            data: {
                Balance: {
                    
                }
            }
        }),

    ])
 }