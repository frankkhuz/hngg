import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Ticket Booking",
  description: "Book tickets for Techember Fest '25",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "black" }}
        className={`${inter.className} bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
