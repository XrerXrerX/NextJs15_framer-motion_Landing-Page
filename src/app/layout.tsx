/** @format */

import "./globals.css";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head>
        {/* Tambahkan tag meta di sini */}
        <meta name="google-adsense-account" content="ca-pub-2113469480437461" />
      </Head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
