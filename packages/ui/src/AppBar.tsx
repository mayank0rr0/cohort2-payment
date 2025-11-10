import { Dispatch, SetStateAction } from "react";
import { Button } from "./button";
import { More } from "./Icons";

interface AppbarProps {
    user?: {
        name?: string | null
    },
    show: boolean
    onClick: Dispatch<SetStateAction<boolean>>
    onSignin: () => void 
    onSignout: () => void 
}

const AppBar = ({ user, onSignin, onSignout, onClick , show } : AppbarProps) => {


    return <div className="flex justify-between py-4 px-5 border-b-2 border-gray-300 shadow ">
        {/* App Name */}
        <div className="text-3xl flex flex-col justify-center text-pink-700 font-bold">
            Payment 2.0
        </div>

        <div className="flex">
            {/* NAME */}
            <div className="flex flex-row justify-center items-center text-xl px-3"> 
                Hello, {user?.name ? user.name.split('')[0]?.toUpperCase() + user.name.slice(1) : "Anonymous"} 
                <div className="rounded-full bg-blue-700 w-15 h-15 text-2xl flex flex-col items-center text-center justify-center font-bold text-white text-shadow-2xs text-shadow-black ml-5">
                    {(user?.name || "Anonymous").split('')[0]?.toUpperCase()}
                </div>
            </div>
            {/* SignOut Button */}
            <div className="flex flex-col justify-center" onClick={() => onClick(!show)} onMouseLeave={() => {
                    setTimeout(() => {
                        onClick(false)
                    }, 5*1000)
                }}>
                {show ? <Button onClick={ user ? onSignout : onSignin }>{ user ? "Sign Out" : "Sign In"}</Button> : <More/>}
            </div>
        </div>
    </div>
}

export default AppBar