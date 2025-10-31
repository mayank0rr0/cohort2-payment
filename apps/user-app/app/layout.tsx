import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@repo/ui/styles.css';
import { Provider } from "../providers";
import { AppBarCliemt } from "../AppBarClient";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <AppBarCliemt />
          {children}
        </Provider>
      </body>
    </html>
  );
}
