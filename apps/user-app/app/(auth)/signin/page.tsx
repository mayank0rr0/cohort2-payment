'use client'
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/Center";
import { Input } from "@repo/ui/Input";
import { Title } from "@repo/ui/Title";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    return <div className="h-full">
        <Center>
            <Card>
                <div className="w-70">
                    <Title title="Sign In"/>
                    <Input fieldType="text" name="Number" onChange={setPhone}/>
                    <Input fieldType="password" name="Password" onChange={setPassword}/>
                    <div className="flex justify-center pt-4">
                        <Button onClick={async () => {
                            const resolve = await signIn("credentials", {
                                redirect: false,
                                phone,
                                password,
                                callbackUrl: '/dashboard'
                            });

                            if (resolve?.error == "UserNotFound") {
                                alert("No User Found");
                            } else if (resolve?.error == "MissingCredentials") {
                                alert("Invalid Credentials");
                            } else if (!resolve?.error) {
                                router.push('/dashboard')
                            } else {
                                alert('Error')
                            }

                            }}>

                            Submit
                        </Button>
                    </div>
                </div>
            </Card>
        </Center>
    </div>
}