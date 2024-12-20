import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className="h-full">
        <div className="h-full grid grid-rows-[auto_1fr_auto]">
					<header className="bg-green-200">Header</header>
					{children}
					<footer className="bg-green-200">Footer</footer>
				</div>
      </body>
    </html>
  );
}
