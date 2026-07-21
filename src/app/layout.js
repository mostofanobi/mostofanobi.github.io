import { Google_Sans, Google_Sans_Code } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mostofa Nobi",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${googleSansCode.variable} h-full font-sans bg-background antialiased text-[15px]`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
