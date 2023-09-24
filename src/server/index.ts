import { z } from 'zod';
import { publicProcedure, router } from './trpc';
import { SearchResponse, removeDuplicatesByScore } from './utils';

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
			const res = (await response.json()) as SearchResponse[];
			return removeDuplicatesByScore(res);
		}),
	documentQuery: publicProcedure
		.input(
			z.object({
				case_number: z.string(),
				query: z.string(),
			}),
		)
		.mutation(async ({ input }) => {
			const myHeaders = new Headers();
			myHeaders.append('Content-Type', 'application/json');

			const raw = JSON.stringify({
				query: input.query,
				case_number: input.case_number,
			});

			const response = await fetch(
				'https://chatserver-production-f10b.up.railway.app/query',
				{
					method: 'POST',
					headers: myHeaders,
					body: raw,
				},
			);

			const res = await response.text();
			return res;
		}),
});

export type AppRouter = typeof appRouter;
