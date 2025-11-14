import { TranxState } from "@repo/store";
import { Card } from "@repo/ui/card";
import { Title } from "@repo/ui/Title";

interface tranxListProp {
  tranxList: TranxState['tranxList'] | undefined
}

export const TranxListCard = ({tranxList } : tranxListProp) => {

    return <Card>
    <Title title="Transaction History" ></Title>
      <div className="w-full pt-2 h-[50vh] overflow-auto noscrollbar scroll-auto">
        {/* table starts */}        
        <table className="table-auto w-full h-full">

          <thead className="bg-linear-180 dark:from-purple-700 dark:via-purple-600/70 dark:to-purple-500 via-pink-600/70 from-pink-700 text-white [border-radius: 10px]">
            <tr>
              <th>
                <div className="p-5">
                  From    
                </div>
              </th>
              <th>
                <div className="p-5">
                  To    
                </div>
              </th>
              <th>
                <div className="p-5">
                  Amount    
                </div>
              </th>
              <th>
                <div className="p-5">
                  Time    
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="w-full mt-10 h-full">
            {tranxList ? tranxList.map((x,i) => <tr key={i} className="border-b dark:border-zinc-500 border-slate-300">
              {/* Transfer this into a New Element */}
              <td>
                <div className="h-full p-4 flex justify-center">
                  { x.from.name ? x.from.name?.split('')[0]?.toUpperCase() + x.from.name?.slice(1) : x.from.num ?? "-"}
                </div>
              </td>
              <td>
                <div className="h-full p-4 flex justify-center ">
                  { x.to.name ? x.to.name?.split('')[0]?.toUpperCase() + x.to.name?.slice(1) : x.to.num ?? "-"}
                </div>
              </td>
              <td>
                <div className="h-full p-4 flex justify-center">
                  INR {x.amount}
                </div>
              </td>
              <td>
                <div className="h-full p-4 flex justify-center">
                  {x.time.toDateString()}
                </div>
              </td>
            </tr>
            ) : <tr>No Transactions Found</tr>}
          </tbody>
        </table>
      {/* table ends */}
      </div>
    </Card>
}