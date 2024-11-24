import { Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Liberty Finance. Formular",
    description: "Liberty Finance Formular",
    keywords: " ",
};

export default function FormularLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <main>
                {children}
                <Footer isStatic={false} />
            </main>
        </main>
    );
}  