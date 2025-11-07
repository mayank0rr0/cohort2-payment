"use client"
import AppBar from "@repo/ui/AppBar";
import { signIn, signOut, useSession } from "next-auth/react";

export const AppBarCliemt = () => {
    const session = useSession();

    return <div>
        <AppBar onSignin={signIn} onSignout={async () => {
            signOut({callbackUrl: "/api/auth/signin"})
        }} user={session.data?.user} />
    </div>
}