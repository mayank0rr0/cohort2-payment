import { AppBarCliemt } from "../../AppBarClient";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return <div className="flex flex-col w-full dark:text-zinc-200">
    <AppBarCliemt />
        <div className="flex flex-row h-full"> 
            <div className="w-full">
                {children}
            </div>
        </div>
    </div>
}