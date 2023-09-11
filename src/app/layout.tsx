import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Header from "./components/header";

const roboto = Work_Sans({
	weight: "400",
	subsets: ["latin"],
});

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={work_sans.className}>
				<Header />
				<main className="flex">
					{/* left panel */}
					<div className="flex-initial lg:w-1/4"></div>
					{/* center panel */}
					<div className="xl:w-10/12 w-full">
						{children}
					</div>
					{/* right paenl */}
					<div className="flex-initial lg:w-1/4 h-screen"></div>
				</main>
			</body>
		</html>
	);
}
