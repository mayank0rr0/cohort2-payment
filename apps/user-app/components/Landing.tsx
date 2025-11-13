"use client"
import Image from "next/image"
import { Toggle } from "./Toggle"
import { Button } from "@repo/ui/button"
import { useRouter } from "next/navigation"
import { Card } from "@repo/ui/card"

export const Landing = () => {
    const router = useRouter();

    return <div className="h-full w-full">
        <div className="min-h-screen 
            dark:bg-[radial-gradient(circle_750px_at_85%_2%,var(--color-amber-100),var(--color-amber-100),var(--color-purple-400),var(--color-purple-600),var(--color-purple-800),var(--color-zinc-900))] 
            bg-[radial-gradient(circle_750px_at_80%_5%,var(--color-pink-500),var(--color-pink-200),var(--color-white))] 
            ">
            
            <div className="h-screen">
            {/* Logo */}
            <div className="absolute pt-10 px-10 ">
                <Image className="dark:hidden" src="/images/light-lq.png" alt="logo" width={150} height={200} />
                <Image className="not-dark:hidden" src="/images/dark-lq.png" alt="logo" width={150} height={200} />
            </div>
            
            {/* hero section */}
            <div className="flex flex-col h-full justify-center gap-5 items-center pt-10 px-10">
                
                <Image className="dark:hidden rounded-2xl border-2 m-5 shadow-xl shadow-pink-300/75 border-pink-500 p-2 bg-slate-100" src="/images/light-dash.png" alt="logo" width={800} height={500} />
                <Image className="not-dark:hidden rounded-2xl border-2 m-5 shadow-xl shadow-purple-700/75 border-purple-400 p-2 bg-zinc-800" src="/images/dark-dash.png" alt="logo" width={800} height={500} />
            
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-5xl font-semibold text-shadow text-shadow-purple-900 hover:text-shadow-2xl">
                        A Simple Payment Application
                    </h1>
                    
                    <div className="text-lg">
                        Send money in seconds. Secure, simple, and instant.
                    </div>

                    <div className="pt-2">
                        <Button onClick={() => {
                            router.push('/signin')
                        }}>
                            Start Now 
                        </Button>
                    </div>

                </div>
            
            </div>
            </div>

            
            <div className="h-screen w-full flex justify-end">
                {/* Tech Stack */}
                {/* Look at a better way and replace this */}
                <div className="flex h-full items-center absolute left-[-250] top-220 w-full">
                    <div className="border-2 animate-pulse delay-300 rounded-full border-pink-400 dark:border-zinc-400 w-250 h-250 flex justify-center items-center">
                        <div className="border-2 animate-pulse delay-300 rounded-full border-pink-400 dark:border-zinc-400 w-200 h-200 flex justify-center items-center">
                            <div className="border-2 animate-pulse delay-200 rounded-full border-pink-400 dark:border-zinc-400 w-160 h-160 flex justify-center items-center">
                                <div className="border-2 animate-pulse delay-150 rounded-full border-pink-400 dark:border-zinc-400 w-120 h-120 flex justify-center items-center">
                                    <div className="border-2 animate-pulse delay-100 rounded-full border-pink-400 dark:border-zinc-400 w-80 h-80 flex justify-center items-center">
                                        <div className="border-2 animate-pulse delay-75 rounded-full border-pink-400 dark:border-zinc-400 w-40 h-40 flex justify-center items-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-5 p-10 w-1/2 h-full z-10">
                    <div className="text-5xl">
                        Tech stack
                    </div>
                    <div className="text-lg">
                        Simple Payment lets users and merchants send and receive payments seamlessly, with real-time updates, transaction tracking, and instant settlement — built for modern web apps.
                    </div>
                    <div>
                        Frontend	Next.js (App Router), TailwindCSS
                        Backend	Node.js / Express
                        Monorepo	Turborepo
                        Database	PostgreSQL / Prisma ORM
                        Communication	REST + Webhooks
                        Integration	Bank Mock APIs
                        Deployment	Vercel + Render (or custom backend host)
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="h-screen flex flex-col justify-center p-20">
                <div className="flex h-full flex-col p-10 justify-center items-center text-center bg-linear-20 dark:from-purple-700 from-pink-600 dark:via-purple-900 via-pink-400  rounded-4xl gap-10 z-10">
                    <div className="text-6xl">
                        Features - Simple, Fast, Transparent.
                    </div>
                    <ul className=" text-lg">
                        <li>
                            Instant P2P Transfers	Transfer money between users instantly and securely.
                        </li>
                        <li>
                            Transaction History & Search	Access complete transaction logs with smart filtering and search.
                        </li>
                        <li>
                            Bank Integration (Mock APIs)	Simulate real-world banking with HDFC, SBI, and Axis mock APIs.
                        </li>
                        <li>
                            Merchant Mode	Merchants can receive payments, track sales, and withdraw funds easily.
                        </li>
                        <li>
                            Automated Webhooks	Stay synced with real-time status updates using smart webhook handlers.
                        </li>
                        <li>
                            Modular Architecture	Built using Turborepo for scalable multi-app management.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Modern Architechture */}
            <div className="h-screen p-10 flex w-full ">
                <div className="flex left-0 absolute gap-3 w-full h-full">
                    { Array.from({length : 25}).map((_, i) => {
                        const h = (Math.floor((Math.random() * 100)))
                        
                        return <div key={i} style={{
                            height: `${h}%`,
                            animationDelay: `${i * 100}ms`,
                            animationDuration: "2s" 
                        }} className=" w-full bg-pink-400 dark:bg-zinc-600 dark:hover:bg-purple-700 hover:bg-pink-600 rounded-md animate-pulse"></div>
                        })
                    }
                </div>

                <div className=" w-1/2 z-10 flex flex-col gap-7 h-fit mt-10 py-8 px-10 bg-linear-50 bg-white  dark:bg-zinc-900 rounded-2xl">
                    <div className="text-5xl">
                        Modern Architecture, Real world Components 
                    </div>
                    <div>
                        Show a simplified version of your diagram (the one you provided) or redraw it more visually with clear arrows:
                        User App (Next.js)

                        Merchant App (Next.js)

                        Auxiliary Backend (Node/Express)

                        Mock Banks (APIs)

                        Add a short caption:

                        The system mimics actual banking ecosystems — handling internal and external transfers, webhook updates, and transaction reconciliation.
                    </div>
                </div>
            </div>

            {/* Work Flow */}
            <div className="flex h-screen px-40 justify-end items-center my-10">
                <div className="absolute z-10 w-150 h-150 p-10 flex flex-col justify-center border-pink-500 dark:border-purple-300 shadow-2xl/90 shadow-pink-700 dark:shadow-purple-500 border-3 rounded-full text-center">
                    <div>
                        <div className="text-4xl">
                        Architecture From Click to Credit — Real-World Flow
                    </div>
                    <div>
                        User initiates transfer
                        → via the Next.js User app.

                        Backend verifies balance
                        → through the internal DB and sweepers.

                        Bank API processes transaction
                        → (mocked via HDFC, SBI, Axis).

                        Webhook updates the system
                        → balances auto-adjusted, transaction marked complete.

                        User gets instant feedback
                        → in their transaction history dashboard.
                    </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="h-100 dark:bg-[radial-gradient(circle_750px_at_50%_0%,var(--color-amber-100),var(--color-amber-100),var(--color-purple-400),var(--color-purple-600),var(--color-purple-800),var(--color-zinc-900))] 
            bg-[radial-gradient(circle_750px_at_50%_0%,var(--color-pink-500),var(--color-pink-200),var(--color-white))] 
            text-zinc-800 flex flex-col justify-center text-center px-50 gap-5">
                
                <div className="text-5xl font-bold">
                    Ready to experience modern digital payments?
                </div>
                <div>
                    [Try Demo]

                    [View GitHub]

                    [Read Docs]
                </div>
            </div>

            <div className="flex justify-end h-10 text-sm items-center text-zinc-400 font-mono px-10">
                A Project by MAYANK0RR0 - 2025
            </div>

            <Toggle />
        </div>
    </div>
}