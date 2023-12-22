import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import StyledComponentsRegistry from "@/utils/styledComponentsRegistry";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meistericons",
  description: "Icons for your next project.",
};

export type IRootLayout = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Readonly<IRootLayout>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
          <Footer />

          <Toaster />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
