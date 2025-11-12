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
            dark:bg-[radial-gradient(circle_750px_at_85%_2%,var(--color-amber-100),var(--color-amber-100),var(--color-purple-400),var(--color-purple-600),var(--color-purple-800),var(--color-zinc-800))] 
            bg-[radial-gradient(circle_750px_at_80%_5%,var(--color-pink-500),var(--color-pink-200),var(--color-white))]">
            
            <div className="h-screen">

            <div className="absolute px-10 pt-10">
                <Image className="dark:hidden" src="/images/light-lq.png" alt="logo" width={150} height={200} />
                <Image className="not-dark:hidden" src="/images/dark-lq.png" alt="logo" width={150} height={200} />
            </div>
            {/* hero section */}
            <div className="flex h-full justify-center items-center pt-5 px-8">
                <div>
                    <h1 className="text-6xl font-semibold text-shadow text-shadow-purple-900 hover:text-shadow-2xl">
                        A Simple Payment
                    </h1>
                    
                    <h2 className="text-4xl font-semibold">
                        Application
                    </h2>
                    <div className="text-lg">
                        Send money in seconds. Secure, simple, and instant.
                    </div>
                    <div className="text-md">
                        Simple Payment lets users and merchants send and receive payments seamlessly, with real-time updates, transaction tracking, and instant settlement — built for modern web apps.
                    </div>
                    <div className="pt-10">
                        <Button onClick={() => {
                            router.push('/signin')
                        }}>
                            Start Now 
                        </Button>
                    </div>
                </div>

                <Image className="rounded-2xl border-2 m-5 shadow-xl shadow-purple-700/50 border-purple-700 p-2 bg-zinc-800" src="/images/dark-dash.png" alt="logo" width={800} height={500} />
            </div>
            </div>

            <div className="h-screen w-full flex">
                <div className="w-1/2" >
                    <div className="flex-col h-full w-fll flex justify-center">
                        <Image className="absolute overflow-clip top-180 left-[-300] animate-spin" src="/images/halo.png" alt="logo" width={700} height={10} />
                        <Image className="absolute " src="/turborepo-light.svg" alt="logo" width={200} height={200} />
                        <Image className="absolute " src="/turborepo-light.svg" alt="logo" width={200} height={200} />
                        <Image className="absolute " src="/turborepo-light.svg" alt="logo" width={200} height={200} />
                        <Image className="absolute " src="/turborepo-light.svg" alt="logo" width={200} height={200} />
                    </div>
                </div>
                <div className="text-6xl w-1/2">
                    Tech stack
                    <div>
                        <Card >
                            Hello
                        </Card>
                    </div>
                </div>
            </div>

            <div className="h-screen ">
                <div className="text-6xl w-1/2">
                    Features - Simple, Fast, Transparent.
                </div>
                <div>
                    ⚡	Instant P2P Transfers	Transfer money between users instantly and securely.
                    🔍	Transaction History & Search	Access complete transaction logs with smart filtering and search.
                    🏦	Bank Integration (Mock APIs)	Simulate real-world banking with HDFC, SBI, and Axis mock APIs.
                    💰	Merchant Mode	Merchants can receive payments, track sales, and withdraw funds easily.
                    🔄	Automated Webhooks	Stay synced with real-time status updates using smart webhook handlers.
                    🧩	Modular Architecture	Built using Turborepo for scalable multi-app management.
                </div>
            </div>


            <div className="h-screen ">
                <div className="text-6xl w-1/2">
                    Modern Architecture, Real-World Flow
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

            <div className="h-screen ">
                <div className="text-6xl w-1/2">
                    Architecture From Click to Credit — the Flow
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

            <div className="h-screen ">
                <div className="text-6xl w-1/2">
                    Tech Stack
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

            <div className="h-screen ">
                <div className="text-6xl w-1/2">
                    AI - review + dev corner
                </div>
                <div>
                    The project explores modular full-stack design — combining multiple Next.js apps with shared logic, unified backend services, and mock banking systems for realistic P2P transaction simulation.

                    Add:

                    GitHub repo link

                    API documentation link

                    Demo link (if deployed)
                </div>
            </div>

            <div className="h-screen ">
                <div className="text-6xl w-1/2">
                    Call-to Action - Ready to experience modern digital payments?
                </div>
                <div>
                    [Try Demo]

                    [View GitHub]

                    [Read Docs]
                </div>
            </div>

            <Toggle />
        </div>
    </div>
}