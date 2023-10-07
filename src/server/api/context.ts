import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { Session, getServerSession } from 'next-auth';
import { authConfig } from '../auth';
import { prisma } from '../db';

interface CreateContextOptions {
	session: Session | null;
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
	return {
		session: opts.session,
		prisma,
	};
};

export async function createContext(opts?: FetchCreateContextFnOptions) {
	const session = await getServerSession(authConfig);

	return createInnerTRPCContext({ session });
}
