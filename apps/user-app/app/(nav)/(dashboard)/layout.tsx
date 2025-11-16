import { ReactNode } from "react";
import { SideBar } from "../../../components/SideBar";
import { StateProvider } from "../../../components/StateProvider";
import { authOptions } from "../../../lib/auth";
import { getUser } from "../../../lib/getUser";
import { getServerSession } from "next-auth";


interface DashboardLayoutProps {
    children : ReactNode
}

export default async function DashboardLayout({children} : DashboardLayoutProps) {
    const session = await getServerSession(authOptions);
  const userData = await getUser(session?.user.id ?? '');


    return <div className="flex h-full">
        <div className="flex md:w-60 pl-3 md:pl-10!">
            <StateProvider tranxAll={userData?.tranxList ?? []} p2p={userData?.p2p ?? []} balance={userData?.data?.Balance[0] ?? null} transactions={userData?.data?.OnRampTransaction ?? null}>
                <SideBar />
            </StateProvider>
        </div> 
        <div className="w-full pb-5">
            {children} 
        </div>
    </div>
}

