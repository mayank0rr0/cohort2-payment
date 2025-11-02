import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null
    },
    onSignin: () => void 
    onSignout: () => void 
}

const AppBar = ({user, onSignin, onSignout} : AppbarProps) => {
    return <div className="flex justify-between py-4 px-5 border-b-2 border-gray-500 shadow ">
        <div className="text-2xl">
            Payment2
        </div>
        <div className="">
            <Button onClick={user ? onSignout : onSignin }>{user ? "Sign Out" : "Sign In"}</Button>
        </div>
    </div>
}

export default AppBar