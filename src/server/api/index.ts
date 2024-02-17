import { createTRPCRouter, publicProcedure } from '../trpc';
import { search_router } from './routers/search';

export const appRouter = createTRPCRouter({
	health: publicProcedure.query(() => {
		return 'Just checking trpc';
	}),
	search_router,
});

export type AppRouter = typeof appRouter;
