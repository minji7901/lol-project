import type { Metadata } from "next";
import "./globals.css";
import { Jua, Nanum_Gothic } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./providers";
import { ThemeProvider } from "next-themes";

const jua = Jua({
  subsets: ["latin"],
  weight: ["400"],
});
const nanumGothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "League Of Legend Info",
  description: "This is a League of Legends information app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={nanumGothic.className}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header juaClass={jua.className} />
            <section className="mt-[70px] p-5 h-[calc(100vh-220px)] max-w-[1200px] mx-auto md:p-0 md:pt-10 md:h-[calc(100vh-160px)]">
              {children}
            </section>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
