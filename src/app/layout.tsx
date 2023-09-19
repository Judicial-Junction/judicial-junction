import { fontSans } from '@/config/font';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Judicial Junction',
	description: 'All your legal needs in one place.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body className={clsx(fontSans.variable)}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
