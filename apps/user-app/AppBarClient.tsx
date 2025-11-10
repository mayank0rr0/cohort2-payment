"use client"
import AppBar from "@repo/ui/AppBar";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export const AppBarCliemt = () => {
    const session = useSession();
    const [show, setShow] = useState(false)

    return <div>
        <AppBar onClick={setShow} show={show} onSignin={signIn} onSignout={async () => {
            signOut({callbackUrl: "/api/auth/signin"})
        }} user={session.data?.user} />
    </div>
}