import { JSX } from "react"

export const Card = ({children}: {children : React.ReactNode}) : JSX.Element => {
  return <div className="flex-col flex justify-center py-8 px-6 dark:bg-zinc-700 bg-white gap-2 border-2 rounded-lg min-h-14 border-slate-300 dark:border-zinc-800 hover:shadow-lg dark:shadow-zinc-950">
    <div>
      {children}
    </div>  
  </div>
}
