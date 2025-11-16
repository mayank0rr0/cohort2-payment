import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@repo/ui/styles.css';
import { Provider } from "../providers";
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
  title: "Simple Payment",
  description: "A simple wallet app",
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
              {children}
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
