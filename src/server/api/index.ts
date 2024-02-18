import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { search_router } from './routers/search';

export const appRouter = createTRPCRouter({
	health: publicProcedure.query(() => {
		return 'Just checking trpc';
	}),
	search_router,
	documentQuerying: publicProcedure
		.input(z.object({ query: z.string(), case_number: z.string() }))
		.mutation(async () => {
			return 'Not Implemented';
		}),
});

export type AppRouter = typeof appRouter;
