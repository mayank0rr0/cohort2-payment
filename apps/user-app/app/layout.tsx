import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@repo/ui/styles.css';
import { Provider } from "../providers";
import { AppBarCliemt } from "../AppBarClient";
import { StateProvider } from "../components/StateProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { getUser } from "../lib/getUser";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Payment 2.0",
  description: "Simple wallet app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  const userData = await getUser(session?.user.id ?? '');

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <StateProvider balance={userData?.Balance[0] ?? null} transactions={userData?.OnRampTransaction ?? null}>
            <div className="flex flex-col h-screen w-full">
              <AppBarCliemt />
              <div className="flex flex-row h-full"> 
                <div className="w-full">
                  {children}
                </div>
              </div>
            </div>
          </StateProvider>
        </Provider>
      </body>
    </html>
  );
}
