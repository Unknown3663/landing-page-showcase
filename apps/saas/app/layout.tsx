import type { Metadata } from "next";
import "./globals.css";
import "./polish.css";
export const metadata: Metadata = { title: "Aster — work clarity", description: "A fictional operations workspace concept." };
export default function Layout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
