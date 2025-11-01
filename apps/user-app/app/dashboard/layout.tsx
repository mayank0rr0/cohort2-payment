import { ReactNode } from "react";
import { SideBar } from "../../components/SideBar";

interface DashboardLayoutProps {
    children : ReactNode
}

export default function DashboardLayout({children} : DashboardLayoutProps) {
    return <div className="flex h-full">
        <div className="flex w-60 pl-10">
            <SideBar />
        </div> 
        {children}
    </div>
}

