import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { search_router } from './routers/search';
import { openai_router } from './routers/openai';

export const appRouter = createTRPCRouter({
	search_router,
	openai_router,
	documentQuery: publicProcedure
		.input(z.object({ query: z.string(), case_number: z.string() }))
		.mutation(async () => {
			return 'Not Implemented';
		}),
});

export type AppRouter = typeof appRouter;
