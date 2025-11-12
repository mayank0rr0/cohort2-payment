import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@repo/ui/styles.css';
import { Provider } from "../providers";
import { AppBarCliemt } from "../AppBarClient";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "PayMe App",
  description: "Simple wallet app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <ThemeProvider>
            <div className="flex flex-col w-full dark:text-zinc-200">
              <AppBarCliemt />
              <div className="flex flex-row h-full"> 
                <div className="w-full">
                  {children}
                </div>
              </div>
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
