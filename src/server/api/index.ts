import { createTRPCRouter, publicProcedure } from '../trpc';
import { documentQueryingRouter } from './routers/chatApp';
import { SearchPageRouter } from './routers/search';

export const appRouter = createTRPCRouter({
	Health: publicProcedure.query(() => {
		return 'healthy api';
	}),
	SearchPage: SearchPageRouter,
	documentQuery: documentQueryingRouter,
});

export type AppRouter = typeof appRouter;
