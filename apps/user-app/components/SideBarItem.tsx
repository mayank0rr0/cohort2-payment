"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SideBarItemProps {
    name: string;
    page: string;
    icon: ReactNode;
}

export const SideBarItem = ( { name, page, icon } : SideBarItemProps ) => {
    const path = usePathname();
    let cssClasses = "text-slate-700"

    if (path == page) {
        cssClasses = "text-pink-700"
    }

    return <div className={"my-2 hover:text-shadow hover:text-pink-600 text-shadow-pink-500 " + cssClasses}>
        <Link href={page}>
            <div className="flex font-medium">
                <div className="pr-2">
                    {icon}
                </div>
                <div>
                    {name}
                </div>
            </div>
        </Link>
    </div>
}