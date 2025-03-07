import type { Metadata } from "next";
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

export const metadata: Metadata = {
	title: "Serhii Zavadskyi",
	description: "Serhii Zavadskyi - Frontend Developer",
	icons: [
		{
			url: "/favicon-32x32.png",
			rel: "icon",
			sizes: "32x32",
			type: "image/png",
		},
		{
			url: "/favicon-16x16.png",
			rel: "icon",
			sizes: "16x16",
			type: "image/png",
		},
		{
			url: "/apple-touch-icon.png",
			rel: "apple-touch-icon",
			sizes: "180x180",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
