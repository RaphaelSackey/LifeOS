import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import {
	ClerkProvider,
	Show,
	SignInButton,
	SignUpButton,
	UserButton,
} from "@clerk/nextjs";
import { Suspense } from "react";
import Sidebar from "@/components/UI/sidebar";
import { Sign } from "crypto";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: "LifeOS",
	description: "Your personal administration command center",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang='en'
			className={`${inter.variable} h-full antialiased`}>
			<body className='min-h-screen'>
				<ClerkProvider>
					<header className='flex justify-end items-center p-4 gap-4 h-16'>
						<Suspense>
							<Show when='signed-out'>
								<SignInButton >
									<button className="hover:underline">
										Sign In
									</button>
								</SignInButton>
								<SignUpButton>
									<button className='bg-sidebar text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer border hover:opacity-80 '>
										Sign Up
									</button>
								</SignUpButton>
							</Show>
							<Show when='signed-in'>
								<UserButton />
							</Show>
						</Suspense>
					</header>
					<div className='flex min-h-screen flex-col md:flex-row'>
						<Sidebar />
						<main className='min-w-0 flex-1'>{children}</main>
					</div>
				</ClerkProvider>
			</body>
		</html>
	);
}
