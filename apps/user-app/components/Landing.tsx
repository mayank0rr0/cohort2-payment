"use client"
import Image from "next/image"
import { Toggle } from "./Toggle"
import { Button } from "@repo/ui/button"
import { useRouter } from "next/navigation"
import { DemoArrowIcon, DocsIcon } from "@repo/ui/Icons"

export const Landing = () => {
    const router = useRouter();

    return <div className="h-full w-full">
        <div className="min-h-screen 
            dark:bg-[radial-gradient(circle_750px_at_85%_2%,var(--color-amber-100),var(--color-amber-100),var(--color-purple-400),var(--color-purple-600),var(--color-purple-800),var(--color-zinc-900))] 
            bg-[radial-gradient(circle_750px_at_85%_2%,var(--color-pink-600),var(--color-pink-500),var(--color-pink-200),rgb(240,240,240))]">
            
            <div className="h-screen">
            {/* Logo */}
            <div className="absolute pt-10 px-10 ">
                <Image className="dark:hidden" src="/images/light-lq.png" alt="logo" width={150} height={200} />
                <Image className="not-dark:hidden" src="/images/dark-lq.png" alt="logo" width={150} height={200} />
            </div>
            
            {/* hero section */}
            <div className="flex flex-col h-full justify-center gap-2 items-center pt-15 px-10">
                {/* dashboard */}
                <div className="px-35">
                    <Image className="dark:hidden rounded-2xl border-3 m-5 shadow-xl shadow-pink-300/75 border-pink-500 p-2 bg-slate-100" src="/images/light-dash.png" alt="logo" width={800} height={500} />
                    <Image className="not-dark:hidden rounded-2xl border-3 m-5 shadow-xl hover:shadow-3xl hover:border-purple-100 hover:shadow-purple-400 shadow-purple-700/75 border-purple-400 p-2 bg-zinc-800" src="/images/dark-dash.png" alt="logo" width={800} height={500} />
                </div>
            
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-5xl text-center font-semibold dark:text-purple-50 hover:text-shadow-xl">
                        A Simple Payment Application
                    </h1>

                    <div className="text-lg">
                        Send money in seconds. Secure, simple, and instant.
                    </div>

                    <div className="pt-2 flex justify-end">
                        <div className="absolute rounded-full w-3 h-3 bg-purple-100 animate-ping"></div>
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
                
                {/* improve */}
                < div className="flex h-full items-center w-full absolute left-0 top-255 z-10 ">
                    <div className="w-200 h-200 rounded absolute">
                        <Image style={{
                            animation: 'orbit 14s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "80px"  
                        }} className="size-19 absolute top-50 left-50" src="/Node.js_logo.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute">
                        <Image style={{
                            animation: 'orbit 17s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "150px"  
                        }} className="size-19 absolute top-50 left-50" src="/vercel.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute">
                        <Image style={{
                            animation: 'orbit 16s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "250px"  
                        }} className="size-19 absolute top-50 left-50" src="/logo_dark.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute">
                        <Image style={{
                            animation: 'orbit 15s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "300px"  
                        }} className="size-35 absolute top-50 left-50" src="/turborepo-light.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute">
                        <Image style={{
                            animation: 'orbit 12s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "300px"
                        }} className="size-19 absolute top-50 left-50" src="/Tailwind_CSS_Logo.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute">
                        <Image style={{
                            animation: 'orbit 10s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "190px"
                        }} className="size-25 absolute top-50 left-50" src="/prisma.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute">
                        <Image style={{
                            animation: 'orbit 44s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "350px"
                        }} className="size-19 absolute top-50 left-50" src="/nextjs.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute">
                        <Image style={{
                            animation: 'orbit 34s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "430px"
                        }} className="size-25 absolute top-50 left-50" src="/Postgresql_elephant.svg" alt="logo" width={10} height={10} />
                    </div>
                </div>

                {/* text */}
                <div className="flex flex-col justify-center gap-5 p-10 w-2/3 h-full z-10 p-20">
                    <div className="bg-linear-180 not-dark:from-pink-200 not-dark:via-pink-300/70 not-dark:to-pink-400/70 not-dark:hover:from-pink-700 not-dark:hover:to-pink-500 not-dark:hover:via-pink-600 hover:text-white dark:from-zinc-700/90 dark:to-zinc-900/70 p-10 dark:hover:from-purple-800 dark:hover:to-purple-950 rounded-4xl flex flex-col gap-2">
                        <div className="text-5xl dark:text-purple-50 pb-3">
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
            <div className="h-screen p-20 flex w-full">
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

                <div className=" w-1/2 z-10 flex flex-col gap-7 h-fit mt-10 py-8 px-10 bg-linear-50 not-dark:bg-white dark:bg-zinc-900 rounded-2xl">
                    
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
            <div className="flex h-screen px-40 justify-end my-10">
                
                <div className="absolute z-10 w-150 h-150 p-10 flex flex-col justify-center bg-linear-0 bg-zinc-900/90 border-pink-500 dark:border-purple-300 shadow-2xl/90 shadow-pink-700 dark:shadow-purple-500 border-3 rounded-full text-center">
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
            bg-[radial-gradient(circle_750px_at_50%_0%,var(--color-pink-600),var(--color-pink-500),var(--color-pink-200),var(--color-white))]  
            text-zinc-800 flex flex-col justify-center text-center px-50 gap-15">
                
                <div className="text-5xl font-bold text-shadow-amber-50/40 text-shadow-lg">
                    Ready to experience modern digital payments?
                </div>
                <div className="flex justify-center gap-10 w-full h-22">
                    <div className="flex flex-col justify-between">
                        <DemoArrowIcon />
                        <p>
                            Demo
                        </p>
                    </div>

                    <div className="flex flex-col justify-between">
                        <Image className="size-16 animate-bounce" style={{
                            animationDuration : '2s',
                        }} src="/github-mark.svg" alt="Github" width={30} height={20} />
                        <p>
                            Github
                        </p>
                    </div>
                    
                    <div className="flex flex-col justify-between">
                        <DocsIcon />
                        Docs
                    </div>
                </div>
            </div>

            <div className="flex justify-center h-10 text-sm items-center text-zinc-400 font-mono px-10">
                A Project by MAYANK0RR0 - 2025
            </div>

            <Toggle />
        </div>
    </div>
}