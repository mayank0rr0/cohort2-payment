"use client"
import { useBalance, useTranxList } from "@repo/store"
import { PageHead } from "@repo/ui/PageHead"
import { Title } from "@repo/ui/Title"
import { Card } from "@repo/ui/card"

export default function Tnx() {
  const tranxList = useTranxList((s) => s.tranxList)
  const balance = useBalance((s) => s.amount)

  return <div className="w-full">
    <PageHead name="Transactions" />
    <div className="px-10">
      <div className="flex gap-10 pb-10 w-full ">
          <div className="flex w-1/2 text-center justify-between gap-4 items-center bg-pink-700 text-3xl text-white font-bold rounded-2xl py-10 px-6 font-sans">
            <span className=" text-xl/relaxed font-light"> Balance: </span> 
            <span> INR {balance} </span>
          </div>
      </div>

      <Title title="Transaction History" ></Title>
      <div className="flex justify-between pl-10 pr-30 py-4">
        <div>From</div> 
        <div>To</div> 
        <div>Amount</div> 
        <div>Time</div> 
      </div>
      <div className="flex justify-center pt-2">
          <div className="w-full overflow-y-auto pl-[10] pr-[5] h-[40vh] flex flex-col gap-3">
            {tranxList.map((x,i) => <div key={i} className="">
              {/* Transfer this into a New Element */}
              <Card>
                <div className="flex justify-between">
                  <div>
                    {x.from.name ?? x.from.num ?? "-"}
                  </div>
                  <div>
                    {x.to.name ?? x.to.num ?? "-"}
                  </div>
                  <div>
                    INR {x.amount}
                  </div>
                  <div>
                    {x.time.toDateString()}
                  </div>
                </div>
              </Card>
            </div>
            )}
          </div>
      </div>
    </div>
  </div>
}
