import Link from "next/link";
import { ReactNode } from "react";

interface SideBarItemProps {
    name: string;
    page: string;
    icon: ReactNode;
}

export const SideBarItem = ( { name, page, icon } : SideBarItemProps ) => {

    return <div className="my-2">
        <Link href={page}>
            <div className="flex font-medium hover:text-shadow-xs text-shadow-pink-500  text-pink-700">
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