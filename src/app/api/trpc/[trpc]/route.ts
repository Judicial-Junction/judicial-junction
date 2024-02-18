import {
	FetchCreateContextFnOptions,
	fetchRequestHandler,
} from '@trpc/server/adapters/fetch';

import { appRouter } from '@/server/api';

const handler = (req: Request) =>
	fetchRequestHandler({
		endpoint: '/api/trpc',
		req,
		router: appRouter,
		createContext: function (
			opts: FetchCreateContextFnOptions,
		): object | Promise<object> {
			return {};
		},
	});

export { handler as GET, handler as POST };
