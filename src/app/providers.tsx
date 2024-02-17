'use client';
import { trpc } from '@/app/_trpc/client';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React, { useState } from 'react';
import SuperJSON from 'superjson';

function getBaseUrl() {
	if (typeof window !== 'undefined') return '';

	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

	return `http://localhost:${process.env.PORT ?? 3000}`;
}

export function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient({}));
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: `${getBaseUrl()}/api/trpc`,
				}),
			],
			transformer: SuperJSON,
		}),
	);
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<NextUIProvider>
					<NextThemesProvider attribute="class" defaultTheme="dark">
						{children}
					</NextThemesProvider>
				</NextUIProvider>
			</QueryClientProvider>
		</trpc.Provider>
	);
}
