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
    let cssClasses = "text-slate-700 dark:text-zinc-400"

    if (path == page) {
        cssClasses = "text-pink-700 dark:text-purple-400"
    }

    return <div className={"my-2 hover:text-shadow dark:hover:text-purple-200 hover:text-pink-600 text-shadow-pink-500 " + cssClasses}>
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