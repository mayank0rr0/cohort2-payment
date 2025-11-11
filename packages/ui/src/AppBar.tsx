import { Dispatch, SetStateAction } from "react";
import { Button } from "./button";
import { AvatarIcon, More } from "./Icons";

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


    return <div className="flex justify-between py-4 px-5 border-b-2 not-dark:border-gray-300 dark:border-zinc-600 shadow ">
        {/* App Name */}
        <div className="text-3xl flex flex-col justify-center dark:text-purple-400 text-pink-700 font-bold">
            Payment 2.0
        </div>

        {user?.name ? <div className="flex">
            {/* NAME */}
            <div className="flex flex-row justify-center items-center text-xl px-3"> 
                Hello, {user?.name ? user.name.split('')[0]?.toUpperCase() + user.name.slice(1) : "Anonymous"} 
                <AvatarIcon username={user?.name}/>
            </div>
            {/* SignOut Button */}
            <div className="flex flex-col justify-center" onClick={() => onClick(!show)} onMouseLeave={() => {
                    setTimeout(() => {
                        onClick(false)
                    }, 5*1000)
                }}>
                {show ? <Button onClick={ user ? onSignout : onSignin }>{ user ? "Sign Out" : "Sign In"}</Button> : <More/>}
            </div>
        </div> : null}
    </div>
}

export default AppBar