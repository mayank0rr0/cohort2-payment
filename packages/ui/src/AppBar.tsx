import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null
    },
    onSignin: () => void 
    onSignout: () => void 
}

const AppBar = ({user, onSignin, onSignout} : AppbarProps) => {
    return <div className="ui:flex ui:justify-between ui:py-4 ui:px-5 ui:border-b-2 ui:border-gray-500 ui:shadow ">
        <div className="ui:text-2xl">
            Payment2
        </div>
        <div className="">
            <Button onClick={user ? onSignout : onSignin }>{user ? "Sign Out" : "Sign In"}</Button>
        </div>
    </div>
}

export default AppBar