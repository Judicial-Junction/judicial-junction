import { fontSans } from '@/config/font';
import '@/styles/globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './_components/Navbar/navbar';
import { Providers } from './providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Judicial Junction',
	description: 'All your legal needs in one place.',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body
				className={clsx(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable,
				)}
			>
				<Providers>
					<div className="min-h-screen flex flex-col">
						<Navbar />
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
