import UniversalBanner from "@/components/UniversalBanner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blogs page",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UniversalBanner header="Our Blogs" />
      <div className="universal-container">{children}</div>
    </>
  );
}
