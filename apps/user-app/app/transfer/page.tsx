import { AddMoneyCard } from "../../components/AddMoneyComponent";
import { BalanceCard } from "../../components/BalanceComponent";
import { OnRampCard } from "../../components/OnRampTransaction";
import { PageHead } from "@repo/ui/PageHead"

export default function Transfer() {
  
  return <div className="w-full">
    {/* Heading */}
    <PageHead name="Transfer Page" />
    <div className="flex gap-4 px-8 py-2">
      {/* ADD MONEY */}
      <div className="w-1/2">
        <AddMoneyCard />
      </div>
      {/* BALANCE */}
      {/* RECENT TRANX */}
      <div className="flex flex-col w-1/2 gap-4">
        <BalanceCard />
        <OnRampCard />
      </div>
    </div>
  </div>
}
