import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mandeep Singh | Full Stack Developer | Codeware IT Dehradun",
  description:
    "Mandeep Singh - Full Stack Developer. Learn MERN Stack, Java, Python, PHP, Frontend & Backend at Codeware IT, the best coding and computer institute in Dehradun.",
  keywords: [
    "codewareit.in",
    "best coding institute in dehradun",
    "best computer institute in dehradun",
    "best programming language in dehradun",
    "best mern stack programming institute in dehradun",
    "best java institute in dehradun",
    "best python institute in dehradun",
    "best php institute in dehradun",
    "best frontend institute in dehradun",
    "best backend institute in dehradun",
  ],
  metadataBase: new URL("https://codewareit.in"),
  openGraph: {
    title: "Mandeep Singh | Full Stack Developer",
    description:
      "Learn MERN Stack, Java, Python, PHP, Frontend & Backend at Codeware IT, the best coding institute in Dehradun.",
    url: "https://codewareit.in",
    siteName: "Codeware IT",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
