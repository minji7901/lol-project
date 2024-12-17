import type { Metadata } from "next";
import "./globals.css";
import { Jua, Nanum_Gothic } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="kr">
      <body className={nanumGothic.className}>
        <Header juaClass={jua.className} />
        <section className="my-[72px] h-[calc(100vh-160px)] overflow-auto py-10">
          <div className="max-w-[1200px] mx-auto">{children}</div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
