"use client"
import { useTranxList } from "@repo/store"
import { Card } from "@repo/ui/card"
import { Title } from "@repo/ui/Title"


export const TranxListCard = () => {
    const tranxList = useTranxList((s) => s.tranxList)

    return <>
    <Title title="Transaction History" ></Title>
      <div className="flex justify-between px-5 py-4">
        <div>From</div> 
        <div>To</div> 
        <div>Amount</div> 
        <div>Time</div> 
      </div>
      <div className="flex justify-center pt-2">
          <div className="w-full overflow-y-auto  noscrollbar h-[40vh] flex flex-col gap-3">
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
    </>
}