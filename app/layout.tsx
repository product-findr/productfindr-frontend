import OnchainProviders from "@/config/OnchainProviders";
import type { Metadata } from "next";

import "./global.css";
import "@coinbase/onchainkit/styles.css";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Productfindr",
  description: "Search smarter, find better, earn Bigger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center">
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}
