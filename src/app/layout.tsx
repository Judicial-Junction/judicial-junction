import { fontSans } from '@/config/font';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import Navbar from './_components/Navbar/navbar';
import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
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
					<div className="min-h-screen bg-gradient-to-b from-primary flex flex-col">
						<Navbar />
						{children}
					</div>
				</Providers>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
