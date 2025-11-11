"use client"
import { TranxState, useBalance, useTranxList } from "@repo/store"
import { PageHead } from "@repo/ui/PageHead"
import { TranxListCard } from "../../../components/TranxListCard"
import { useEffect, useState } from "react"

export default function Tnx() {
  const balance = useBalance((s) => s.amount)
  const tranxList = useTranxList((s) => s.tranxList)
  const [search, setSearch ] = useState('')
  const [newList, setNewList] = useState< TranxState['tranxList'] | undefined >(undefined) 

  useEffect(() => {
    console.log(search)
    const timer = setTimeout(() => {
    const newList = tranxList.filter((x) => JSON.stringify(x).toLowerCase().includes(search)) 
    setNewList(newList)
    }, 1000*1)

    return () => {clearTimeout(timer)}
  }, [search, tranxList, newList])

  return <div className="w-full ">
    <PageHead name="Transactions" />
    <div className="px-10">
      <div className="flex gap-5 pb-5 w-full ">
          <div className="flex w-1/2 text-center justify-between gap-4 items-center dark:bg-purple-700 bg-pink-700 text-3xl dark:text-slate-50 not-dark:text-white font-bold rounded-lg px-10 font-sans">
            <span className=" text-xl/relaxed font-light"> Balance: </span> 
            <span> INR {balance} </span>
          </div>
          <div className="flex w-1/2 text-center justify-between gap-4 items-center border-2 not-dark:border-slate-300 shadow dark:border-zinc-800 not-dark:bg-white dark:bg-zinc-700 text-3xl not-dark:text-pink-700 dark:text-purple-200 font-bold rounded-lg py-5 px-6 font-sans">
            <span className=" text-xl/relaxed font-light"> Search: </span> 
            <input className=" border-2 rounded-full border-pink-700 dark:border-purple-600 text-lg font-normal w-full h-15 p-5 hover:shadow-md focus:shadow-lg outline-none ring-0 " 
              type="text" placeholder="Type here to filter the list" onChange={(e) => {setSearch(e.target.value.toLowerCase().trim())}} />
          </div>
      </div>

      <TranxListCard tranxList={newList || tranxList}/>
    </div>
  </div>
}
