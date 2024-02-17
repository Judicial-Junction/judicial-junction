import { initTRPC } from '@trpc/server';
import SuperJson from 'superjson';
import { ZodError } from 'zod';

const t = initTRPC.create({
	transformer: SuperJson,
	errorFormatter({ shape, error }) {
		return {
			...shape,
			data: {
				...shape.data,
				zodError:
					error.cause instanceof ZodError
						? error.cause.flatten()
						: null,
			},
		};
	},
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
