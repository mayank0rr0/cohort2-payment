import { SideBarItem } from "./SideBarItem" 
import {HomeIcon, P2PIcon, TransferIcon, TranxIcon} from "@repo/ui/Icons"

export const SideBar = () => {
    return <div className="flex flex-col w-full border-r dark:border-zinc-600 border-slate-400">
        <div className="fixed top-80" >
            <SideBarItem name={"Home"} icon={<HomeIcon />} page={"/dashboard"} />
            <SideBarItem name={"Transfer"} icon={<TransferIcon />} page={"/transfer"} />
            <SideBarItem name={"Transaction"} icon={<TranxIcon />} page={"/transactions"} />
            <SideBarItem name={"P2P Transfer"} icon={<P2PIcon />} page={"/p2p"} />
        </div>
    </div>
} 

