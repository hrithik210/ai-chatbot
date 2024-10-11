import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "./lib/utils";
import { Provider } from "./components/Provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ai chat bot",
  description: "Chat with any website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`,
          "min-h-screen"
        )}
      >
      <Provider>
        <main className="h-screen dark text-foreground bg-background">
          {children}
        </main>
      </Provider>
     
      </body>
    </html>
  );
}
