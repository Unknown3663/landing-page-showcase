import type { Metadata } from "next";
import "./globals.css";
import "./polish.css";
export const metadata: Metadata = { title: "Serein Coffee House", description: "A fictional coffee house concept." };
export default function Layout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
