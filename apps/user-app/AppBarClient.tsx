"use client"
import AppBar from "@repo/ui/AppBar";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export const AppBarCliemt = () => {
    const session = useSession();
    const [show, setShow] = useState(false)

    return <div>
        <AppBar onClick={setShow} show={show} onSignin={signIn} onSignout={async () => {
            signOut({callbackUrl: "/api/auth/signin"})
        }} user={session.data?.user} img={<Logo />} />
    </div>
}

const Logo = () => {
    return <div>
        <Image className="dark:hidden" src="/images/light-long-hq.png" alt="logo" width={180} height={100} />
        <Image className="not-dark:hidden" src="/images/dark-long-hq.png" alt="logo" width={180} height={100} />
    </div>
}