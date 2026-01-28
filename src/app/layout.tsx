import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-space-mono"
});

export const metadata: Metadata = {
    title: "Le Cafe Philippines | Audiophile Listening Cafe",
    description: "A premium listening experience where high-end audio meets rich coffee culture.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${spaceMono.variable} font-sans`}>
                {children}
            </body>
        </html>
    );
}
