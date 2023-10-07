import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../../trpc';

export const documentQueryingRouter = createTRPCRouter({
	chat: publicProcedure
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
