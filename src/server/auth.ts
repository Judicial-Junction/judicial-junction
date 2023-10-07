import { env } from '@/env.mjs';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from './db';

export const authConfig: NextAuthOptions = {
	adapter: PrismaAdapter(prisma) as Adapter,
	providers: [
		GoogleProvider({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET
		}),
	],
	callbacks: {
		async session({ session, user }) {
			session.user.id = user.id;
			return session;
		},
	},
};