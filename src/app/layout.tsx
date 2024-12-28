/** @format */

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lintas Inovasi Global",
  description: "LIGAL",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2113469480437461" />
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
