import { z } from 'zod';
import { publicProcedure, router } from './trpc';

interface SearchField {
	file_name: string[];
	file_summary: string[];
}

interface SearchResponse {
	_id: string;
	_index: string;
	_score: number;
	fields: SearchField;
}

export const appRouter = router({
	greeting: publicProcedure.input(z.string()).query(({ input }) => {
		return { greeting: `Hello ${input}` };
	}),
	search: publicProcedure
		.input(
			z.object({
				query: z.string(),
			}),
		)
		.mutation(async ({ input }) => {
			const myHeaders = new Headers();
			myHeaders.append('Content-Type', 'application/json');

			const raw = JSON.stringify({
				message: input.query,
			});

			const response = await fetch(
				'https://opensearchtorch-production.up.railway.app/query',
				{
					method: 'POST',
					headers: myHeaders,
					body: raw,
				},
			);
			const res = await response.json();
			return res as SearchResponse[];
		}),
});

export type AppRouter = typeof appRouter;
