import { PageHead } from "@repo/ui/PageHead";
import { SendCard } from "../../../components/SendCard";
import { Center } from "@repo/ui/Center";

export default function P2P() {
    return <div className="w-full h-full">
        <PageHead name="P2P Transfer"/>
        <div className="h-[70vh]">
            <Center>
                <SendCard />
            </Center>
        </div>
    </div>
}