import { Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liberty Finance",
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