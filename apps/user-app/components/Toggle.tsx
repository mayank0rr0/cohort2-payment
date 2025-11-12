"use client"

import { useTheme } from "@repo/store"

export const Toggle = () => {
    const theme = useTheme((s) => s)
    
    return <div className="flex fixed bottom-5 left-5">
            <div className="text-center self-center m-2 font-semibold dark:text-purple-400 text-pink-700">
                Change theme 
            </div>
        <div className={"flex justify-center px-2 border-4 py-2 rounded-full dark:hover:border-amber-50 hover:border-blue-600 hover:shadow-xl hover:shadow-bg-pink-700 hover:dark:shadow-bg-purple-700 dark:border-purple-600 not-dark:border-pink-700" }>
            <div className="w-5 h-5 rounded-full dark:hover:bg-amber-50 hover:bg-blue-600 dark:bg-purple-600 bg-pink-700 hover:cursor-pointer"
                onClick={() => {
                    theme.updateDark(!theme.dark);
                }}></div>
        </div>
    </div>
}