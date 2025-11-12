import { Dispatch, ReactNode, SetStateAction } from "react";
import { Button } from "./button";
import { AvatarIcon, More } from "./Icons";

interface AppbarProps {
    user?: {
        name?: string | null
    },
    img: ReactNode
    show: boolean
    onClick: Dispatch<SetStateAction<boolean>>
    onSignin: () => void 
    onSignout: () => void 
}

const AppBar = ({ user, onSignin, onSignout, onClick , show, img } : AppbarProps) => {

    if (window.location.pathname == '/') return null

    return <div className="flex dark:none justify-between px-5 border-b not-dark:border-gray-300 dark:border-zinc-700 shadow ">
        {/* App Name */}
        <div className="flex flex-col justify-center w-50 ">
            {img}
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
                {show ?<Button onClick={ user ? onSignout : onSignin }>{ user ? "Sign Out" : "Sign In"}</Button>: <More/>}
            </div>
        </div> : ( !window.location.pathname.includes('sign') ? <Button onClick={onSignin}> Sign In </Button> : null)}
    </div>
}

export default AppBar