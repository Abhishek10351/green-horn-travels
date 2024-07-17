import { Inter } from "next/font/google";
// import "./globals.css";
import "./app.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Green Horn Travels - Your One-Stop Travel Agency in Guwahati",
  description: "Experience the best travel services in Guwahati with Green Horn Travels. Get customized tour packages, car rentals, and hotel reservations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href={inter.url} />
        <meta name="google-site-verification" content="iozI_H9hDHLq0fSbDhN9X1QMHR6Nae9ypfpLNB1B79o" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
