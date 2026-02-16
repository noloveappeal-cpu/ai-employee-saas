import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "AI Employee SaaS",
  description: "Your always-on AI employee."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}Add RootLayout component
