import { z } from 'zod';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
	greeting: publicProcedure.input(z.string()).query(({ input }) => {
		return { greeting: `Hello ${input}` };
	}),
});

export type AppRouter = typeof appRouter;
