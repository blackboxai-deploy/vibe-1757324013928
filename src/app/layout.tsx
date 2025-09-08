import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PUBG Battle Royale - Web Game",
  description: "A fully functional battle royale game inspired by PUBG with 100-player bot simulation, realistic combat, and authentic gameplay mechanics.",
  keywords: "PUBG, battle royale, web game, multiplayer, shooting game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased bg-black text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}