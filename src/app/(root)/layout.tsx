import { Footer, Header } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LIBERTY Finanz",
  description: "Home page",
  keywords: "",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <Footer isStatic={false} />
    </main>
  );
}  