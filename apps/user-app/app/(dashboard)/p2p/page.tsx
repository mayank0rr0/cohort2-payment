import { PageHead } from "@repo/ui/PageHead";
import { SendCard } from "../../../components/SendCard";
import { Center } from "@repo/ui/Center";
import { P2PTxn } from "../../../components/P2pTransaction";

export default function P2P() {
    return <div className="w-full h-full">
        <PageHead name="P2P Transfer"/>
        <div className="flex">
            <div className="w-1/2 h-[65vh]">
                <Center>
                    <SendCard />
                </Center>
            </div>
            
            <div className="w-1/2 h-[70vh] border-l border-slate-400 ">
                <P2PTxn />
            </div>
        </div>
    </div>
}