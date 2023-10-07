import { TRPCError, initTRPC } from '@trpc/server';
import SuperJson from 'superjson';
import { ZodError } from 'zod';
import { createContext } from './api/context';

const t = initTRPC.context<typeof createContext>().create({
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

const enforceAuth = t.middleware(({ ctx, next }) => {
	if (!ctx.session?.user) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}
	return next({
		ctx: {
			session: { ...ctx.session },
		},
	});
});

export const protectedProcedure = t.procedure.use(enforceAuth);
